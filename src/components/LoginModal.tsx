import React, { useEffect } from 'react';
import { X, User, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
    const { t } = useTranslation();

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login delay
        setTimeout(() => {
            if (onLoginSuccess) {
                onLoginSuccess();
            } else {
                onClose();
            }
        }, 500);
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-surface w-full max-w-md rounded-3xl shadow-2xl border border-border overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="relative h-32 bg-primary flex items-center justify-center">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        aria-label={t('login.closeButton')}
                    >
                        <X size={20} />
                    </button>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                        <User size={32} className="text-white" />
                    </div>
                </div>

                {/* Form */}
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">
                            {t('login.title')}
                        </h2>
                        <p className="text-foreground/70">
                            {t('login.subtitle')}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80 px-1">
                                {t('login.email')}
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary transition-all outline-none text-foreground"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-medium text-foreground/80">
                                    {t('login.password')}
                                </label>
                                <button type="button" className="text-xs text-primary hover:underline">
                                    {t('login.forgot')}
                                </button>
                            </div>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary transition-all outline-none text-foreground"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                        >
                            <LogIn size={20} />
                            {t('login.submit')}
                        </button>

                        <div className="text-center pt-2">
                            <button type="button" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                                {t('login.register')}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="p-6 bg-background/50 text-center border-t border-border">
                    <p className="text-xs text-foreground/50">
                        &copy; {new Date().getFullYear()} Elternverein HTL Mödling
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default LoginModal;
