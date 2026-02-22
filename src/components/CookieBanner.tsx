import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window !== 'undefined') {
            return !localStorage.getItem('cookie-consent');
        }
        return false;
    });

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-in slide-in-from-bottom-full duration-500">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-card text-foreground p-6 rounded-3xl shadow-2xl border border-border flex flex-col md:flex-row items-center gap-6 ring-1 ring-black/5">
                    <div className="flex-grow text-sm md:text-base text-foreground/80">
                        <p>
                            {t('cookieBanner.text')}
                            <Link to="/datenschutz" className="ml-2 text-primary hover:underline font-medium">
                                {t('cookieBanner.privacyLink')}
                            </Link>
                        </p>
                    </div>
                    <div className="flex shrink-0 gap-3 w-full md:w-auto">
                        <button
                            onClick={handleAccept}
                            className="flex-grow md:grow-0 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                        >
                            {t('cookieBanner.accept')}
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-xl text-foreground/70 transition-colors"
                            aria-label={t('login.closeButton', 'Close')}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
