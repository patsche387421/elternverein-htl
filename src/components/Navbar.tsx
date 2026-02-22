import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import SettingsModal from './SettingsModal';
import LoginModal from './LoginModal';
import Logo from './Logo';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const closeAll = () => {
        setIsOpen(false);
        setIsLoginOpen(false);
        setIsUserMenuOpen(false);
        setIsSettingsOpen(false);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsUserMenuOpen(false);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.news'), path: '/news' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.projects'), path: '/projects' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-colors border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3 group" onClick={closeAll}>
                        <Logo className="h-10 w-auto text-primary transition-transform duration-300 group-hover:scale-110" size={40} />
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-bold text-primary leading-none">
                                Elternverein
                            </span>
                            <span className="text-xs font-medium text-foreground/60 tracking-wide uppercase">
                                HTL Mödling
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 rounded-full font-medium transition-colors hover:bg-primary/5 hover:text-primary",
                                    location.pathname === link.path
                                        ? "text-primary bg-primary/10"
                                        : "text-foreground/70"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Actions - Right */}
                        <div className="hidden lg:flex items-center justify-end gap-3 flex-shrink-0 w-[200px]">
                            {/* Settings Gear */}
                            <button
                                onClick={() => setIsSettingsOpen(true)}
                                className="p-3 rounded-xl text-foreground/60 hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/10 shadow-sm"
                                aria-label={t('settings.title', 'Einstellungen')}
                            >
                                <Settings size={20} />
                            </button>

                            {!isLoggedIn ? (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="bg-primary text-primary-foreground min-w-[140px] px-4 py-2 rounded-full hover:bg-primary-dark transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 ml-2"
                                >
                                    <User size={18} />
                                    <span>{t('nav.login')}</span>
                                </button>
                            ) : (
                                <div className="relative ml-2">
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary/20 hover:border-primary transition-colors font-bold"
                                    >
                                        PK
                                    </button>

                                    {isUserMenuOpen && (
                                        <>
                                            <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)}></div>
                                            <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-200">
                                                <div className="px-4 py-2 border-b border-border mb-2">
                                                    <p className="font-bold text-foreground">Patrick Kroeger</p>
                                                    <p className="text-xs text-foreground/60">Administrator</p>
                                                </div>
                                                <button className="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary flex items-center gap-2">
                                                    <Settings size={16} />
                                                    {t('nav.profile')}
                                                </button>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 flex items-center gap-2"
                                                >
                                                    <LogOut size={16} />
                                                    {t('nav.logout')}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsSettingsOpen(true)}
                            className="p-3 rounded-full text-foreground/80 hover:bg-surface active:scale-95 transition-transform"
                            aria-label={t('settings.title', 'Einstellungen')}
                        >
                            <Settings size={22} />
                        </button>
                        <button
                            className="p-3 -mr-2 rounded-full text-foreground/80 hover:bg-surface active:scale-95 transition-transform"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={t('nav.aria.menuToggle', 'Toggle menu')}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && createPortal(
                <div className="fixed inset-0 z-50 flex flex-col bg-surface animate-in slide-in-from-right-10 duration-200">
                    {/* Cloud Header for Mobile Menu */}
                    <div className="flex justify-between items-center p-4 border-b border-border bg-surface/80 backdrop-blur-md">
                        <span className="text-xl font-bold text-primary">{t('nav.aria.menuToggle', 'Menu')}</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-foreground"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "flex items-center justify-between p-4 rounded-xl text-lg font-medium active:scale-[0.98] transition-transform",
                                    location.pathname === link.path
                                        ? "bg-primary/10 text-primary"
                                        : "text-foreground/80"
                                )}
                                onClick={closeAll}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border">
                            {!isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsLoginOpen(true);
                                    }}
                                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground p-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    <User size={20} />
                                    {t('nav.login')}
                                </button>
                            ) : (
                                <div className="space-y-2">
                                    <div className="px-4 py-2 bg-surface-2 rounded-xl border border-border flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                                            PK
                                        </div>
                                        <div>
                                            <p className="font-bold">Patrick Kroeger</p>
                                            <p className="text-xs text-foreground/60">Administrator</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2 text-destructive bg-destructive/10 p-4 rounded-xl font-bold"
                                    >
                                        <LogOut size={20} />
                                        {t('nav.logout')}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLoginSuccess={handleLoginSuccess}
            />
        </nav>
    );
};

export default Navbar;
