import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

// ─────────────────────────────────────────────
// Utility: Reine Berechnungsfunktionen (kein Side-Effect)
// ─────────────────────────────────────────────

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : { r: 0, g: 111, b: 214 };
};

const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

/**
 * Berechnet alle CSS-Variablen aus einem Hex-Farbwert.
 * Reine Funktion – kein DOM-Zugriff, leicht testbar.
 */
const computeThemeVars = (hex: string, radiusRem: number): Record<string, string> => {
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const luma = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    const fgValue = luma > 0.55 ? '0 0% 0%' : '0 0% 100%';

    return {
        '--primary': `${hsl.h} ${hsl.s}% ${hsl.l}%`,
        '--primary-foreground': fgValue,
        '--primary-light': `${hsl.h} ${hsl.s}% ${Math.min(96, hsl.l + 45)}%`,
        '--primary-dark': `${hsl.h} ${hsl.s}% ${Math.max(20, hsl.l - 10)}%`,
        // Harmonische Ableitungen
        '--secondary': `${hsl.h} ${Math.round(hsl.s * 0.6)}% ${hsl.l}%`,
        '--secondary-foreground': fgValue,
        '--accent': `${(hsl.h + 30) % 360} ${hsl.s}% ${hsl.l}%`,
        '--accent-foreground': fgValue,
        '--radius': `${radiusRem}rem`,
    };
};

/**
 * Schreibt CSS-Variablen auf :root – einziger DOM-Side-Effect.
 */
const applyThemeVars = (vars: Record<string, string>) => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) =>
        root.style.setProperty(key, value)
    );
};

// ─────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────

interface DesignPreviewProps {
    isOpen: boolean;
    onClose: () => void;
}

// ─────────────────────────────────────────────
// DesignPreview Component – Event-Driven
//
// Knoten-Typ:   [Input/Steuerung] → [Logik/Berechnung] → [Output/Visuelles]
// Signal-Pfad:  onChange-Event → computeThemeVars() → applyThemeVars() → CSS :root
//
// Optimierungen gegenüber Vorgänger:
//  • applyTheme per useCallback – stabile Referenz, keine Re-Erstellung bei jedem Render
//  • Einziger useEffect: reagiert auf [primaryColor, radius] – kein isOpen im Dep-Array
//  • isOpen-Guard als early-return NACH dem Hook (Hooks-Regeln eingehalten)
//  • Trennung: Berechnung (pure) vs. DOM-Mutation (useEffect)
// ─────────────────────────────────────────────

export const DesignPreview: React.FC<DesignPreviewProps> = ({ isOpen, onClose }) => {
    const [primaryColor, setPrimaryColor] = useState('#006FD6');
    const [radius, setRadius] = useState(0.75);

    // [Logik/Berechnung] → [Output/Visuelles]
    // Reaktiver Knoten: feuert bei jeder Änderung von primaryColor oder radius.
    // Kein isOpen im Dep-Array – Theme-Vars bleiben auch nach Schließen aktiv,
    // sodass beim erneuten Öffnen der aktuelle Stand sichtbar ist.
    const applyTheme = useCallback((hex: string, radiusRem: number) => {
        applyThemeVars(computeThemeVars(hex, radiusRem));
    }, []);

    useEffect(() => {
        applyTheme(primaryColor, radius);
    }, [primaryColor, radius, applyTheme]);

    // [Input/Steuerung] Event-Handler – stabile Referenzen
    const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPrimaryColor(e.target.value);
    }, []);

    const handleRadiusChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRadius(parseFloat(e.target.value));
    }, []);

    // Hooks müssen vor diesem Guard aufgerufen werden
    if (!isOpen) return null;

    return (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-surface border border-border rounded-lg shadow-2xl p-6 animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">Design-Vorschau</h3>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                    aria-label="Schließen"
                >
                    <X className="w-5 h-5 text-foreground/60" />
                </button>
            </div>

            <div className="space-y-6">
                {/* [Input] Color Picker */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 block">
                        Primärfarbe
                    </label>
                    <div className="flex gap-3 items-center">
                        <input
                            type="color"
                            value={primaryColor}
                            onChange={handleColorChange}
                            className="w-12 h-12 rounded cursor-pointer bg-transparent border-0"
                        />
                        <input
                            type="text"
                            value={primaryColor.toUpperCase()}
                            onChange={handleColorChange}
                            className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm font-mono text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                </div>

                {/* [Input] Border Radius Slider */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-foreground/80">
                            Ecken-Radius
                        </label>
                        <span className="text-xs font-mono text-foreground/60">{radius}rem</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.05"
                        value={radius}
                        onChange={handleRadiusChange}
                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-foreground/40 px-1">
                        <span>Scharf</span>
                        <span>Rund</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-border">
                    <p className="text-[11px] text-foreground/50 leading-relaxed italic">
                        Diese Änderungen sind temporär und werden nach einem Neuladen der Seite zurückgesetzt.
                    </p>
                </div>
            </div>
        </div>
    );
};
