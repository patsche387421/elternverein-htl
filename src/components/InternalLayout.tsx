import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, MessageSquare, Settings, LogOut } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const InternalLayout = () => {
    const location = useLocation();

    const sidebarLinks = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Calendar', path: '/dashboard/calendar', icon: Calendar },
        { name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
    ];

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 bg-surface border-r border-border hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <Link to="/" className="text-xl font-bold text-primary">
                        EV Intern
                    </Link>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === link.path
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                            )}
                        >
                            <link.icon size={18} />
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-border space-y-2">
                    <Link
                        to="/dashboard/settings"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary"
                    >
                        <Settings size={18} />
                        Settings
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-danger hover:bg-danger/10"
                    >
                        <LogOut size={18} />
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="bg-surface border-b border-border h-16 flex items-center justify-between px-6 md:hidden">
                    <Link to="/" className="text-xl font-bold text-primary">
                        EV Intern
                    </Link>
                    <button className="text-foreground/70 p-2 hover:text-primary transition-colors">
                        <LayoutDashboard size={24} />
                    </button>
                </header>

                {/* Dashboard Content */}
                <main className="flex-grow overflow-auto p-6 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default InternalLayout;
