import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const langs = ['de', 'en', 'tr', 'pt', 'ar'];
        const currentIndex = langs.indexOf(i18n.language.split('-')[0]);
        const nextIndex = (currentIndex + 1) % langs.length;
        const nextLang = langs[nextIndex];
        i18n.changeLanguage(nextLang);
        document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-3 rounded-xl text-foreground/60 hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/10 shadow-sm flex items-center gap-2"
            aria-label={t('nav.aria.languageToggle', 'Toggle Language')}
        >
            <Globe size={18} strokeWidth={2.5} />
            <span className="text-xs font-black uppercase tracking-widest">{i18n.language.split('-')[0]}</span>
        </button>
    );
};

export default LanguageSwitcher;
