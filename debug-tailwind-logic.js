import { readFileSync } from 'fs';
import { resolve } from 'path';

// --- Utility Functions ---
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [37, 99, 235];
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function mixRgb(rgb1, rgb2, weight) {
    return [
        Math.round(rgb1[0] * weight + rgb2[0] * (1 - weight)),
        Math.round(rgb1[1] * weight + rgb2[1] * (1 - weight)),
        Math.round(rgb1[2] * weight + rgb2[2] * (1 - weight))
    ];
}

const getThemeConfig = () => {
    try {
        const filePath = resolve(process.cwd(), './theme-config.json');
        return JSON.parse(readFileSync(filePath, 'utf-8'));
    } catch (error) {
        console.warn('Theme config warning:', error);
        return { theme: { primary: "#2563eb", borderRadius: "0.5rem" } };
    }
};

const themeCfg = getThemeConfig();
console.log('themeCfg:', themeCfg);
const primaryRgb = hexToRgb(themeCfg.theme.primary);
console.log('primaryRgb:', primaryRgb);

const [h, s, l] = rgbToHsl(...primaryRgb);
console.log('HSL:', h, s, l);

// Base Status Colors
const statusColors = {
    success: [16, 185, 129],    // #10b981
    warning: [245, 158, 11],    // #f59e0b
    destructive: [239, 68, 68], // #ef4444
    info: [59, 130, 246]        // #3b82f6
};

// Calculate Mixed Status Colors (15% Primary Influence)
const mixedColors = {};
Object.entries(statusColors).forEach(([key, rgb]) => {
    mixedColors[key] = {
        rgb: mixRgb(primaryRgb, rgb, 0.15),
        hsl: rgbToHsl(...mixRgb(primaryRgb, rgb, 0.15))
    };
});
console.log('mixedColors:', mixedColors);

const generateStatusVars = (isDark = false) => {
    const vars = {};
    Object.entries(mixedColors).forEach(([key, value]) => {
        let [sh, ss, sl] = value.hsl;

        if (isDark) {
            ss = Math.max(0, ss * 0.7);
            sl = Math.min(90, Math.max(40, sl));
        }

        const fg = sl > 60 ? "0 0% 0%" : "0 0% 100%";

        vars[`--${key}`] = `${sh} ${ss}% ${sl}%`;
        vars[`--${key}-foreground`] = fg;
    });
    return vars;
};

console.log('Generated Vars (Dark):', generateStatusVars(true));
