import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Lock, ArrowLeft, Info } from 'lucide-react';
import SEO from '../components/SEO';

const Login = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [toast, setToast] = useState<string | null>(null);

    const showToast = (message: string) => {
        setToast(message);
        setTimeout(() => setToast(null), 4000);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem('login_email', email);
        }
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <SEO
                title={t('login.title')}
                description={t('login.subtitle')}
            />

            <div className="max-w-md w-full bg-card rounded-2xl shadow-2xl p-10 space-y-10 border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest mb-8">
                        <ArrowLeft size={16} className="mr-2" />
                        {t('nav.home')}
                    </Link>
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <User size={40} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-4xl font-black text-foreground tracking-tighter">{t('login.title')}</h2>
                    <p className="text-foreground/60 font-medium mt-3">
                        {t('login.subtitle')}
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">{t('login.email')}</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background text-foreground focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                placeholder={t('login.emailPlaceholder', 'name@example.com')}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">{t('login.password')}</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" size={20} />
                            <input
                                type="password"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background text-foreground focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                placeholder={t('login.passwordPlaceholder', '••••••••')}
                                required
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <button
                                type="button"
                                onClick={() => showToast(t('login.forgotToast', 'Bitte kontaktiere den Schuladministrator.'))}
                                className="text-xs font-black text-primary hover:text-primary/80 uppercase tracking-widest transition-colors mr-2"
                            >
                                {t('login.forgot')}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-[0.98]"
                    >
                        {t('login.submit')}
                    </button>
                </form>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-6 py-4 shadow-2xl">
                        <Info size={20} className="text-primary flex-shrink-0" />
                        <p className="text-sm font-bold text-foreground">{toast}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
