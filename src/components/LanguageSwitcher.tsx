import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
            aria-label="Toggle Language"
        >
            <Globe size={20} />
            <span className="text-sm font-medium uppercase">{i18n.language.split('-')[0]}</span>
        </button>
    );
};

export default LanguageSwitcher;
