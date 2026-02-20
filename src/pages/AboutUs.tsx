import { useTranslation } from 'react-i18next';
import { Target, CheckCircle, Euro, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutUs = () => {
    const { t } = useTranslation();
    const points = t('about.points', { returnObjects: true }) as string[];

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
            <SEO
                title={t('about.title')}
                description={t('about.desc')}
            />

            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t('about.title')}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {t('about.desc')}
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-primary/5 p-8 rounded-2xl border border-border">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.mission')}</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        {t('about.missionDesc')}
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.whatWeDo')}</h2>
                    <ul className="space-y-4">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Membership & Costs */}
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-border">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center p-4 bg-surface rounded-full shadow-sm mb-2">
                        <Euro size={32} className="text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('costs.title')}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            {t('costs.details')}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm inline-block">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">€ 15,-</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-2">/ {t('costs.membershipPerYear')}</span>
                    </div>
                </div>
            </div>

            {/* Board Members Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('board.title')}</h2>
                    <Link to="/about/board" className="text-primary hover:underline font-medium">
                        View All Details
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { role: t('board.roles.chair'), name: "Max Mustermann" },
                        { role: t('board.roles.viceChair'), name: "Julia Sommer" },
                        { role: t('board.roles.treasurer'), name: "Thomas Bauer" },
                        { role: t('board.roles.secretary'), name: "Sarah Lang" },
                        { role: t('board.roles.member'), name: "Mag. Dr. Riegler" },
                        { role: t('board.roles.auditor'), name: "Ing. Huber" },
                    ].map((m, i) => (
                        <div key={i} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center flex-shrink-0 text-foreground/40">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">{m.name}</h3>
                                <p className="text-sm text-primary">{m.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
