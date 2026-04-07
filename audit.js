import fs from 'fs';
import path from 'path';

const localesDir = './src/locales';
const enPath = path.join(localesDir, 'en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

function getAllKeys(obj, prefix = '') {
    let keys = [];
    for (const key of Object.keys(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            keys = keys.concat(getAllKeys(obj[key], fullKey));
        } else {
            keys.push(fullKey);
        }
    }
    return keys;
}

const enKeys = getAllKeys(en).sort();
const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.json') && f !== 'en.json');

console.log(`Auditing ${files.length} languages against en.json (${enKeys.length} keys)...\n`);

let totalMissing = 0;

for (const file of files) {
    const filePath = path.join(localesDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const keys = getAllKeys(data);
    
    const missing = enKeys.filter(k => !keys.includes(k));
    const extra = keys.filter(k => !enKeys.includes(k));

    if (missing.length === 0 && extra.length === 0) {
        console.log(`✅ ${file}: Perfect match!`);
    } else {
        if (missing.length > 0) {
            console.log(`❌ ${file}: Missing ${missing.length} keys:`);
            missing.forEach(k => console.log(`   - ${k}`));
            totalMissing += missing.length;
        }
        if (extra.length > 0) {
            console.log(`⚠️ ${file}: Extra ${extra.length} keys:`);
            extra.forEach(k => console.log(`   + ${k}`));
        }
    }
}

if (totalMissing === 0) {
    console.log('\n✨ ALL LANGUAGES ARE CLEAN AND COMPLETE!');
} else {
    console.log(`\n🚨 FOUND ${totalMissing} MISSING KEYS ACROSS ALL LANGUAGES.`);
    process.exit(1);
}
