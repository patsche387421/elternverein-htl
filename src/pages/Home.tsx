import { ArrowRight, Calendar, Users, Heart, FileText, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import heroBg from '../assets/hero-bg.jpg';

const Home = () => {
    const { t } = useTranslation();

    const features = [
        { icon: Users, title: t('nav.about'), desc: t('about.mission'), link: '/about' },
        { icon: Heart, title: t('nav.services'), desc: t('services.desc'), link: '/services' },
        { icon: Activity, title: t('nav.projects'), desc: t('projects.desc'), link: '/projects' },
    ];

    const newsItems = [
        {
            type: 'event',
            title: t('news.items.festival.title'),
            date: "15.10.2026",
            desc: t('news.items.festival.desc'),
            image: "bg-violet-50 dark:bg-violet-900/20"
        },
        {
            type: 'protocol',
            title: t('news.items.jhv.title'),
            date: "22.09.2025",
            desc: t('news.items.jhv.desc'),
            image: "bg-sky-50 dark:bg-sky-900/20"
        },
        {
            type: 'news',
            title: t('news.items.mentalHealth.title'),
            date: "10.03.2025",
            desc: t('news.items.mentalHealth.desc'),
            image: "bg-emerald-50 dark:bg-emerald-900/20"
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'event': return 'bg-violet-600 text-white';
            case 'protocol': return 'bg-sky-600 text-white';
            default: return 'bg-emerald-600 text-white';
        }
    };

    return (
        <div className="space-y-20 pb-20">
            <SEO
                title={t('home.heroTitle')}
                description={t('home.heroDesc')}
            />

            {/* ── Hero Section ── */}
            <section className="relative w-full overflow-hidden rounded-b-[3rem] shadow-2xl bg-white dark:bg-slate-950
                                h-[70vh] md:h-screen">

                {/* BACKGROUND LAYER: Image
                    object-cover and object-center ensure the focus remains on the building. */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="HTL Mödling Building"
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Glass-Effect Overlay for Readability
                        Combines semi-transparent background and backdrop-blur for a premium look. */}
                    <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/50 backdrop-blur-[2px]" />

                    {/* Gradient Fade for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent" />
                </div>

                {/* CONTENT LAYER: Centered Text & Buttons */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="max-w-4xl space-y-8">
                        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight md:leading-[0.9]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400
                                             animate-gradient-x px-2"
                                style={{ backgroundSize: '200% 200%' }}>
                                Elternverein
                            </span>
                            <span className="block text-slate-900 dark:text-white drop-shadow-sm text-3xl md:text-6xl font-bold mt-4">
                                HTL Mödling
                            </span>
                        </h1>

                        <p className="mt-8 text-lg md:text-2xl text-slate-700 dark:text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
                            {t('home.heroDesc')}
                        </p>

                        {/* INTERACTION LAYER: Centered Links */}
                        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
                            <Link to="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground
                                           rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
                                {t('home.getInvolved')}
                            </Link>
                            <Link to="/about"
                                className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg
                                           bg-white/40 dark:bg-white/10 backdrop-blur-md text-slate-900 dark:text-white 
                                           border border-slate-300 dark:border-white/20
                                           hover:bg-white/60 dark:hover:bg-white/20 transition-all shadow-xl">
                                {t('home.learnMore')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links / Features */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-20">
                    {features.map((f, i) => (
                        <Link key={i} to={f.link} className="bg-card p-8 rounded-3xl shadow-xl border border-border group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <f.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{f.title}</h3>
                            <p className="text-foreground/70 font-medium">{f.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Modern Card-Layout News Section */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{t('home.insightsUpdates')}</span>
                        <h2 className="text-4xl font-bold text-foreground">{t('home.latestNews')}</h2>
                    </div>
                    <Link to="/news" className="flex items-center gap-2 text-foreground/60 hover:text-primary font-semibold transition-colors">
                        {t('home.viewAll')} <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <article key={i} className="flex flex-col group cursor-pointer">
                            <div className={`rounded-3xl aspect-[4/3] mb-5 overflow-hidden relative shadow-md ${item.image}`}>
                                {item.type === 'protocol' ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FileText size={48} className="text-foreground/20" />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getTypeColor(item.type)}`}>
                                        {t(`home.tags.${item.type}`)}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-foreground/50 font-medium">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/70 line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
