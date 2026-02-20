import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Lock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Login = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
            <SEO
                title={t('login.title')}
                description={t('login.subtitle')}
            />

            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8">
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary mb-6">
                        <ArrowLeft size={16} className="mr-1" />
                        {t('nav.home')}
                    </Link>
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <User size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('login.title')}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {t('login.subtitle')}
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('login.email')}</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('login.password')}</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <a href="#" className="text-sm text-primary hover:text-primary/80 font-medium">
                                {t('login.forgot')}
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20"
                    >
                        {t('login.submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
