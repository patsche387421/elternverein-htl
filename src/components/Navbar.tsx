import { useState, useEffect } from 'react';
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
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('login_email'));
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('login_email'));
    }, [location.pathname]);

    const closeAll = () => {
        setIsOpen(false);
        setIsLoginOpen(false);
        setIsSettingsOpen(false);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('login_email');
        setIsLoggedIn(false);
        window.location.href = '/'; // Redirect to /
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.news'), path: '/news' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.projects'), path: '/projekte' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/kontakt' },
        ...(isLoggedIn ? [{ name: t('nav.dashboard', 'Dashboard'), path: '/dashboard' }] : [])
    ];

    return (
        <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-colors border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-5 group" onClick={closeAll}>
                        <Logo className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 transform translate-y-[-2px]" size={56} />
                        <div className="flex flex-col justify-center leading-none">
                            <span className="text-xl md:text-2xl font-black text-foreground tracking-tighter">
                                Elternverein
                            </span>
                            <span className="text-[10px] md:text-xs font-bold text-foreground/60 tracking-[0.2em] uppercase mt-0.5">
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
                                    className="bg-primary text-primary-foreground min-w-[140px] px-4 py-2 rounded-full hover:bg-primary-dark transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 ms-2"
                                >
                                    <User size={18} />
                                    <span>{i18n.language.split('-')[0] === 'de' ? 'Anmelden' : 'Login'}</span>
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-surface text-destructive hover:bg-destructive/10 rounded-full transition-colors flex items-center gap-2 font-medium"
                                >
                                    <LogOut size={16} />
                                    {t('nav.logout', 'Logout')}
                                </button>
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
                            className="p-3 -me-2 rounded-full text-foreground/80 hover:bg-surface active:scale-95 transition-transform"
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
                <div className="fixed inset-0 z-50 flex flex-col bg-surface animate-in slide-in-from-start-10 duration-200">
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
                                    {i18n.language.split('-')[0] === 'de' ? 'Anmelden' : 'Login'}
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 text-destructive bg-destructive/10 p-4 rounded-xl font-bold"
                                >
                                    <LogOut size={20} />
                                    {t('nav.logout', 'Logout')}
                                </button>
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
