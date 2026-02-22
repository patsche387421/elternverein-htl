import { readFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const plugin = require('tailwindcss/plugin');

// --- Utility Functions ---
function hexToRgb(hex) {
  try {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [37, 99, 235];
  } catch (e) {
    return [37, 99, 235];
  }
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

function getContrastColor(r, g, b) {
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luma > 0.55 ? "0 0% 0%" : "0 0% 100%";
}

const getThemeConfig = () => {
  try {
    const filePath = resolve(process.cwd(), './theme-config.json');
    const content = readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(content);
    if (!parsed || !parsed.theme || !parsed.theme.primary) {
      throw new Error("Invalid config structure");
    }
    return parsed;
  } catch (error) {
    console.warn('Theme config warning (using defaults):', error.message);
    return { theme: { primary: "#2563eb", borderRadius: "0.5rem" } };
  }
};

const themeCfg = getThemeConfig();

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "accent-gold": "hsl(var(--accent-gold))",
        "accent-silver": "hsl(var(--accent-silver))",
        card: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        input: "hsl(var(--border))",
        ring: "hsl(var(--ring))",

        // Semantic Status Colors
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "calc(var(--radius) * 0.25)",
        md: "calc(var(--radius) * 0.5)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) * 1.5)",
        "2xl": "calc(var(--radius) * 2)",
        "3xl": "calc(var(--radius) * 3)",
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase }) {
      try {
        const cfg = getThemeConfig();
        const primaryRgb = hexToRgb(cfg.theme.primary);
        const [h, s, l] = rgbToHsl(...primaryRgb);
        const primaryContrast = getContrastColor(...primaryRgb);

        const statusColors = {
          success: [16, 185, 129],    // #10b981
          warning: [245, 158, 11],    // #f59e0b
          destructive: [239, 68, 68], // #ef4444
          info: [59, 130, 246]        // #3b82f6
        };

        const mixedColors = {};
        Object.entries(statusColors).forEach(([key, rgb]) => {
          // Mix 15% primary into the status color
          mixedColors[key] = {
            rgb: mixRgb(primaryRgb, rgb, 0.15),
            hsl: rgbToHsl(...mixRgb(primaryRgb, rgb, 0.15))
          };
        });

        const generateStatusVars = (isDark = false) => {
          const vars = {};
          Object.entries(mixedColors).forEach(([key, value]) => {
            let [sh, ss, sl] = value.hsl;

            if (isDark) {
              // Dark Mode Muting
              ss = Math.max(0, ss * 0.7);
              sl = Math.min(90, Math.max(40, sl));
            }

            const fg = sl > 60 ? "0 0% 0%" : "0 0% 100%";

            vars[`--${key}`] = `${sh} ${ss}% ${sl}%`;
            vars[`--${key}-foreground`] = fg;
          });
          return vars;
        };

        addBase({
          ':root': {
            '--radius': cfg.theme.borderRadius || "0.5rem",
            '--background': `${h} ${Math.min(s, 20)}% 98%`,
            '--surface': `${h} ${Math.min(s, 15)}% 95%`,
            '--foreground': `${h} ${Math.min(s, 30)}% 10%`,

            '--border': `${h} ${Math.min(s, 20)}% 90%`,
            '--input': `${h} ${Math.min(s, 20)}% 90%`,
            '--ring': `${h} ${s}% ${l}%`,

            '--primary': `${h} ${s}% ${l}%`,
            '--primary-foreground': primaryContrast,
            '--primary-light': `${h} ${s}% ${Math.min(96, l + 45)}%`,
            '--primary-dark': `${h} ${s}% ${Math.max(20, l - 10)}%`,

            '--secondary': `${(h + 40) % 360} ${Math.max(0, s - 20)}% 96%`,
            '--secondary-foreground': `${h} ${s}% 20%`,

            '--accent': `${(h + 180) % 360} ${s}% ${l}%`,
            '--accent-foreground': primaryContrast,

            '--accent-gold': `${(h + 45) % 360} 80% 60%`,
            '--accent-silver': `${h} 5% 75%`,

            ...generateStatusVars(false)
          },
          '.dark': {
            '--radius': cfg.theme.borderRadius || "0.5rem",
            '--background': `${h} ${Math.min(s, 30)}% 4%`,
            '--surface': `${h} ${Math.min(s, 25)}% 8%`,
            '--foreground': `${h} ${Math.min(s, 10)}% 98%`,

            '--border': `${h} ${Math.min(s, 20)}% 15%`,
            '--input': `${h} ${Math.min(s, 20)}% 15%`,
            '--ring': `${h} ${s}% 60%`,

            '--primary': `${h} ${s}% ${Math.max(40, l)}%`,
            '--primary-foreground': primaryContrast,
            '--primary-light': `${h} ${s}% 20%`,
            '--primary-dark': `${h} ${s}% 80%`,

            '--secondary': `${(h + 40) % 360} ${Math.min(s, 30)}% 15%`,
            '--secondary-foreground': '0 0% 100%',

            '--accent': `${(h + 180) % 360} ${s}% ${l}%`,
            '--accent-foreground': primaryContrast, // Fixed: use primaryContrast instead of undefined contrastColor

            '--accent-gold': `${(h + 45) % 360} 80% 60%`,
            '--accent-silver': `${h} 5% 75%`,

            ...generateStatusVars(true)
          }
        });
      } catch (e) {
        console.error("Tailwind Plugin Error:", e);
      }
    }),
  ],
}
