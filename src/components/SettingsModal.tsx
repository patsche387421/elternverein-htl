import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, Sun, Moon, Globe, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LANGUAGES = [
    { code: 'de', label: 'Deutsch', flag: '🇦🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ua', label: 'Українська', flag: '🇺🇦' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
];

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const currentLanguage = i18n.language.split('-')[0];

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleLanguageChange = useCallback((lang: string) => {
        i18n.changeLanguage(lang);
    }, [i18n]);

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={t('settings.title', 'Einstellungen')}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/60 backdrop-blur-md animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="relative z-10 w-full max-w-sm bg-surface border border-border rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-300 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Settings size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{t('settings.title', 'Einstellungen')}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl hover:bg-primary/5 text-foreground/60 hover:text-foreground transition-colors"
                        aria-label={t('login.closeButton', 'Schließen')}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Language Selection */}
                    <div className="space-y-3">
                        <label htmlFor="language-select" className="flex items-center gap-2 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                            <Globe size={14} />
                            {t('settings.language', 'Sprache')}
                        </label>
                        <div className="relative group">
                            <select
                                id="language-select"
                                value={currentLanguage}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-xl font-semibold text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/30 transition-all text-base"
                            >
                                {LANGUAGES.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.flag} &nbsp; {lang.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus-within:scale-110 transition-transform">
                                <Globe size={20} />
                            </div>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none group-focus-within:rotate-180 transition-transform">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-foreground/70 uppercase tracking-widest">
                            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                            {t('settings.theme', 'Design')}
                        </label>
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between px-4 py-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${theme === 'dark'
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-primary/10 text-primary'
                                    }`}>
                                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                                </div>
                                <span className="font-semibold text-foreground">
                                    {theme === 'dark' ? t('settings.darkMode', 'Dunkel') : t('settings.lightMode', 'Hell')}
                                </span>
                            </div>

                            {/* Toggle Switch */}
                            <div className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${theme === 'dark' ? 'bg-primary' : 'bg-border'
                                }`}>
                                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0.5'
                                    }`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-border">
                    <p className="text-[11px] text-foreground/40 text-center italic">
                        {t('settings.note', 'Änderungen werden sofort übernommen.')}
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SettingsModal;
