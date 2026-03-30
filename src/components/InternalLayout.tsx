import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Calendar, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const InternalLayout = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('login_email');
        navigate('/');
    };

    const sidebarLinks = [
        { name: t('dashboard.nav.overview', 'Dashboard'), path: '/dashboard', icon: LayoutDashboard },
        { name: t('dashboard.nav.calendar', 'Calendar'), path: '/dashboard/calendar', icon: Calendar },
        { name: t('dashboard.nav.messages', 'Messages'), path: '/dashboard/messages', icon: MessageSquare },
    ];

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <div className="flex h-screen bg-background">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-surface border-r border-border hidden md:flex flex-col">
                <div className="p-6 border-b border-border space-y-6">
                    <Link to="/" className="text-xl font-bold text-primary block">
                        EV Intern
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                            T
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground">Testperson</p>
                            <p className="text-xs text-foreground/50">Vorstandsmitglied</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === link.path
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <link.icon size={18} />
                                {link.name}
                            </div>
                            {link.path === '/dashboard/messages' && (
                                <span className="bg-primary flex-shrink-0 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    3
                                </span>
                            )}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-border space-y-2">
                    <Link
                        to="/dashboard/settings"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary"
                    >
                        <Settings size={18} />
                        {t('dashboard.settings.title', 'Settings')}
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition-colors"
                    >
                        <LogOut size={18} />
                        {t('nav.logout', 'Logout')}
                    </button>
                </div>
            </aside>

            {/* Mobile Overlay Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeMobileMenu}
                    />
                    {/* Drawer */}
                    <aside className="absolute inset-y-0 start-0 w-72 bg-surface border-e border-border flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
                        <div className="p-5 border-b border-border flex items-center justify-between">
                            <Link to="/" className="text-lg font-bold text-primary" onClick={closeMobileMenu}>
                                EV Intern
                            </Link>
                            <button
                                onClick={closeMobileMenu}
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all"
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>
                        </div>
                        <div className="px-5 py-4 border-b border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                                    T
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Testperson</p>
                                    <p className="text-xs text-foreground/50">Vorstandsmitglied</p>
                                </div>
                            </div>
                        </div>
                        <nav className="flex-grow p-4 space-y-1">
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                                        location.pathname === link.path
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <link.icon size={20} />
                                        {link.name}
                                    </div>
                                    {link.path === '/dashboard/messages' && (
                                        <span className="bg-primary flex-shrink-0 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                                            3
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-border space-y-1">
                            <Link
                                to="/dashboard/settings"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-foreground/70 hover:bg-primary/5 hover:text-primary"
                            >
                                <Settings size={20} />
                                {t('dashboard.settings.title', 'Settings')}
                            </Link>
                            <button
                                onClick={() => { closeMobileMenu(); handleLogout(); }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-danger hover:bg-danger/10 transition-colors"
                            >
                                <LogOut size={20} />
                                {t('nav.logout', 'Logout')}
                            </button>
                        </div>
                    </aside>
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="bg-surface border-b border-border h-16 flex items-center justify-between px-4 md:hidden shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                            T
                        </div>
                        <span className="text-sm font-bold text-foreground">Testperson</span>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-foreground/70 p-2 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
                        aria-label={t('nav.aria.menuToggle')}
                    >
                        <Menu size={24} />
                    </button>
                </header>

                {/* Dashboard Content */}
                <main className="flex-grow overflow-auto p-4 md:p-6 bg-background flex flex-col">
                    <div className="max-w-7xl mx-auto flex-grow w-full">
                        <Outlet />
                    </div>
                    {/* Internal Footer */}
                    <footer className="mt-8 pt-4 border-t border-border text-center text-[10px] text-foreground/40 font-bold tracking-[0.2em] uppercase shrink-0">
                        Demo-Version • Erstellt von Patrick K. & Antigravity
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default InternalLayout;
