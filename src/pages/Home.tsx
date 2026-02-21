import { ArrowRight, Calendar, Users, Heart, FileText, Activity } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Lazy-load Spline: nicht beim initialen Bundle, sondern erst wenn Hero mountet
const Spline = lazy(() => import('@splinetool/react-spline'));

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

            {/* ── Spline Hero Section ── */}
            <section
                className="relative flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl text-white"
                style={{ minHeight: 'max(100svh, 700px)' }}
            >
                {/* [z-0] Spline 3D Scene – Background Layer */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <Suspense fallback={
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
                    }>
                        <Spline
                            scene="https://prod.spline.design/FCo08iJfWrlXumxc/scene.splinecode"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Suspense>
                </div>

                {/* [z-1] Gradient overlay für Lesbarkeit */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

                {/* [z-10] Content Layer */}
                <div className="container mx-auto px-4 relative z-10 text-center space-y-8">

                    {/* Animated Gradient Headline */}
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight animate-fade-up">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x"
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            Elternverein
                        </span>
                        <br />
                        <span className="text-white/90 drop-shadow-lg text-3xl md:text-5xl font-bold mt-2 block">
                            HTL Mödling
                        </span>
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md animate-fade-up"
                        style={{ animationDelay: '0.18s', opacity: 0 }}
                    >
                        {t('home.heroDesc')}
                    </p>

                    <div
                        className="pt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
                        style={{ animationDelay: '0.34s', opacity: 0 }}
                    >
                        <Link
                            to="/contact"
                            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30 border border-white/10"
                        >
                            {t('home.getInvolved')}
                        </Link>
                        <Link
                            to="/about"
                            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg"
                        >
                            {t('home.learnMore')}
                        </Link>
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
