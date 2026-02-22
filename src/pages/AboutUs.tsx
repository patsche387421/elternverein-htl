import { useTranslation } from 'react-i18next';
import { Target, CheckCircle, Euro, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutUs = () => {
    const { t } = useTranslation();
    const points = t('about.points', { returnObjects: true }) as string[];

    return (
        <main className="flex-grow">
            <SEO
                title={t('about.title')}
                description={t('about.desc')}
                keywords="Über uns, HTL Mödling, Elternverein, Vorstand, Ziele, Unterstützung"
            />

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
                <header className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('about.title')}</h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('about.desc')}
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-12">
                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg">
                                <Target size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">{t('about.mission')}</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            {t('about.missionDesc')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground tracking-tight">{t('about.whatWeDo')}</h2>
                        <ul className="space-y-4">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <CheckCircle size={22} className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-foreground/80 font-medium leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Membership & Costs */}
                <section className="bg-surface rounded-[2.5rem] p-8 md:p-16 border border-border relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
                        <Euro size={200} strokeWidth={1} />
                    </div>

                    <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
                        <div className="inline-flex items-center justify-center p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-xl mb-2">
                            <Euro size={40} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-4">{t('costs.title')}</h2>
                            <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                                {t('costs.details')}
                            </p>
                        </div>
                        <div className="bg-primary text-primary-foreground px-8 py-5 rounded-3xl shadow-2xl inline-block transform hover:scale-105 transition-transform">
                            <span className="text-5xl font-black">€ 15,-</span>
                            <span className="text-primary-foreground/80 font-bold ml-2 uppercase tracking-widest text-sm">/ {t('costs.membershipPerYear')}</span>
                        </div>
                    </div>
                </section>

                {/* Board Members Section */}
                <section className="space-y-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <h2 className="text-4xl font-bold text-foreground tracking-tight">{t('board.title')}</h2>
                        <Link to="/about/board" className="group flex items-center gap-2 text-primary font-bold text-lg hover:underline transition-all">
                            Vollständige Details ansehen <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                            <article key={i} className="bg-card p-6 rounded-3xl border border-border flex items-center gap-5 hover:border-primary/50 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center flex-shrink-0 text-foreground/30 group-hover:text-primary/50 transition-colors">
                                    <User size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground">{m.name}</h3>
                                    <p className="text-primary font-bold text-sm uppercase tracking-wide">{m.role}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutUs;
