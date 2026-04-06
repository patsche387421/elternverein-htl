import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, Bell, Moon, Sun, Globe, Shield, Lock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
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
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
];

const Settings = () => {
    const { t, i18n } = useTranslation();
    
    const [loginEmail, setLoginEmail] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const currentLanguage = i18n.language.split('-')[0];

    const [notifs, setNotifs] = useState({
        email: true,
        push: false,
        weekly: true
    });

    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });
    const [passwordSuccess, setPasswordSuccess] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('login_email');
        if (storedEmail) setLoginEmail(storedEmail);
    }, []);

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
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [i18n]);

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordForm.new !== passwordForm.confirm || !passwordForm.new) return;
        
        // Mock save
        setTimeout(() => {
            setPasswordSuccess(true);
            setTimeout(() => {
                setPasswordSuccess(false);
                setIsChangingPassword(false);
                setPasswordForm({ current: '', new: '', confirm: '' });
            }, 3000);
        }, 500);
    };

    return (
        <div className="space-y-6 max-w-4xl pb-10">
            <SEO title={t('dashboard.settings.title')} description="Settings" />
            
            <div className="flex justify-between items-center px-4">
                <h1 className="text-3xl font-black text-foreground tracking-tighter">{t('dashboard.settings.title')}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                
                {/* Profile Card */}
                <div className="bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <User size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{t('dashboard.settings.profile.title')}</h2>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{t('dashboard.settings.profile.name')}</label>
                            <input 
                                type="text"
                                value="Testperson"
                                disabled
                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground/60 cursor-not-allowed font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{t('dashboard.settings.profile.email')}</label>
                            <input 
                                type="email"
                                value={loginEmail || 'test@example.com'}
                                disabled
                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground/60 cursor-not-allowed font-medium"
                            />
                        </div>
                    </div>
                </div>

                {/* Appearance Card */}
                <div className="bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Moon size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{t('dashboard.settings.appearance.title')}</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{t('settings.language', 'Sprache')}</label>
                            <div className="relative group">
                                <select
                                    value={currentLanguage}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-xl font-semibold text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/30 transition-all"
                                >
                                    {LANGUAGES.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.flag} &nbsp; {lang.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                                    <Globe size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{t('settings.theme', 'Design')}</label>
                            <button
                                onClick={toggleTheme}
                                className="w-full h-14 flex items-center justify-between px-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all font-semibold"
                            >
                                <span className="flex items-center gap-3">
                                    {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                                    {theme === 'dark' ? t('settings.darkMode', 'Dunkel') : t('settings.lightMode', 'Hell')}
                                </span>
                                <div className={cn("w-12 h-6 rounded-full relative transition-colors duration-300", theme === 'dark' ? 'bg-primary' : 'bg-muted-foreground')}>
                                    <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300", theme === 'dark' ? 'translate-x-[26px]' : 'translate-x-1')} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notifications Card */}
                <div className="bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Bell size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{t('dashboard.settings.notifications.title')}</h2>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { id: 'email', label: t('dashboard.settings.notifications.email'), icon: Mail },
                            { id: 'push', label: t('dashboard.settings.notifications.push'), icon: Bell },
                            { id: 'weekly', label: t('dashboard.settings.notifications.weekly'), icon: User }
                        ].map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-xl">
                                <div className="flex items-center gap-3">
                                    <item.icon size={18} className="text-foreground/40" />
                                    <span className="font-semibold text-foreground">{item.label}</span>
                                </div>
                                <button
                                    onClick={() => setNotifs(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof notifs] }))}
                                    className={cn("w-12 h-6 rounded-full relative transition-colors duration-300 outline-none", notifs[item.id as keyof typeof notifs] ? 'bg-primary' : 'bg-muted-foreground')}
                                >
                                    <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300", notifs[item.id as keyof typeof notifs] ? 'translate-x-[26px]' : 'translate-x-1')} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Card */}
                <div className="bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Shield size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{t('dashboard.settings.security.title')}</h2>
                    </div>
                    
                    {!isChangingPassword ? (
                        <div className="pt-2">
                            <button
                                onClick={() => setIsChangingPassword(true)}
                                className="w-full bg-background border border-border text-foreground py-4 rounded-xl font-bold hover:bg-muted transition-colors flex items-center justify-center gap-2"
                            >
                                <Lock size={18} />
                                {t('dashboard.settings.security.changePassword')}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handlePasswordSubmit} className="space-y-4 animate-in fade-in zoom-in-95 duration-200 block">
                            {passwordSuccess ? (
                                <div className="bg-success/10 text-success p-4 rounded-xl flex items-center gap-3 font-bold border border-success/20">
                                    <CheckCircle2 size={24} />
                                    {t('dashboard.settings.security.success')}
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-3">
                                        <input
                                            type="password"
                                            placeholder={t('dashboard.settings.security.current')}
                                            value={passwordForm.current}
                                            onChange={(e) => setPasswordForm(prev => ({ ...prev, current: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                                            required
                                        />
                                        <input
                                            type="password"
                                            placeholder={t('dashboard.settings.security.new')}
                                            value={passwordForm.new}
                                            onChange={(e) => setPasswordForm(prev => ({ ...prev, new: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                                            required
                                        />
                                        <input
                                            type="password"
                                            placeholder={t('dashboard.settings.security.confirm')}
                                            value={passwordForm.confirm}
                                            onChange={(e) => setPasswordForm(prev => ({ ...prev, confirm: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setIsChangingPassword(false)}
                                            className="flex-1 bg-muted text-foreground py-3 rounded-xl font-bold hover:bg-muted/80 transition-colors"
                                        >
                                            {t('dashboard.overview.actions.cancel', 'Abbrechen')}
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                                            disabled={!passwordForm.new || passwordForm.new !== passwordForm.confirm}
                                        >
                                            {t('dashboard.settings.save')}
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Settings;
