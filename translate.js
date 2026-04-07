import fs from 'fs/promises';
import https from 'https';

const locales = [
    { target: 'hr', langCode: 'hr' },
    { target: 'sr', langCode: 'sr-Latn' },
    { target: 'sl', langCode: 'sl' },
    { target: 'hu', langCode: 'hu' },
    { target: 'ro', langCode: 'ro' }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function translateText(text, targetLang) {
    if (!text || typeof text !== 'string' || text.trim() === '') return text;
    
    return new Promise((resolve) => {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    let translated = '';
                    if (json[0]) {
                        json[0].forEach(item => {
                            if (item[0]) translated += item[0];
                        });
                    }
                    resolve(translated || text);
                } catch (e) {
                    console.log(`Error parsing translation for ${targetLang}:`, e.message);
                    resolve(text);
                }
            });
        }).on('error', (e) => {
            console.log(`HTTP error for ${targetLang}:`, e.message);
            resolve(text);
        });
    });
}

async function translateObject(obj, targetLang) {
    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            result.push(await translateObject(item, targetLang));
        }
        return result;
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key of Object.keys(obj)) {
            result[key] = await translateObject(obj[key], targetLang);
            if (typeof obj[key] === 'string') await sleep(100); // Be gentler
        }
        return result;
    } else if (typeof obj === 'string') {
        return await translateText(obj, targetLang);
    }
    return obj;
}

async function main() {
    try {
        const enText = await fs.readFile('src/locales/en.json', 'utf8');
        const enObj = JSON.parse(enText);

        for (const cfg of locales) {
            console.log(`Translating to ${cfg.target} (${cfg.langCode})...`);
            const translatedObj = await translateObject(enObj, cfg.langCode);
            await fs.writeFile(`src/locales/${cfg.target}.json`, JSON.stringify(translatedObj, null, 4));
            console.log(`Finished ${cfg.target}.json`);
        }
    } catch (error) {
        console.error('Main error:', error);
    }
}

main();
