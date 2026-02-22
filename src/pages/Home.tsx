import { ArrowRight, Calendar, Users, Heart, Activity, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            title: t('about.mission'),
            desc: "Wir fördern die Gemeinschaft und unterstützen Projekte an der HTL Mödling.",
            icon: Users,
            className: "md:col-span-8 md:row-span-2 bg-primary/5 border-primary/20",
            link: "/about"
        },
        {
            title: "Support",
            desc: t('services.desc'),
            icon: Heart,
            className: "md:col-span-4 bg-secondary/5 border-secondary/20",
            link: "/services"
        },
        {
            title: "Projekte",
            desc: t('projects.desc'),
            icon: Activity,
            className: "md:col-span-4 bg-accent/5 border-accent/20",
            link: "/projects"
        },
        {
            title: "Mitgliedschaft",
            desc: "Werden Sie Teil eines starken Netzwerks für unsere Schüler.",
            icon: CheckCircle2,
            className: "md:col-span-12 bg-background border-border",
            link: "/contact"
        }
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
        <main className="flex-grow pb-20">
            <SEO
                title={t('home.heroTitle')}
                description={t('home.heroDesc')}
                keywords="Elternverein, HTL Mödling, Schule, Unterstützung, Gemeinschaft"
            />

            {/* ── Hero Section ── */}
            <header className="relative w-full overflow-hidden rounded-b-[4rem] shadow-2xl bg-white dark:bg-slate-950
                                h-svh flex flex-col items-center justify-center">

                {/* BACKGROUND LAYER: Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.jpg"
                        alt="HTL Mödling Hauptgebäude"
                        className="w-full h-full object-cover object-center opacity-90 dark:opacity-40 filter contrast-[1.15] brightness-[1.05] transition-opacity duration-1000"
                        loading="lazy"
                    />

                    {/* Dynamic Glass-Effect Overlay - Lighter in Light Mode */}
                    <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/80 backdrop-blur-[2px] transition-all duration-700" />

                    {/* Gradient Fade for Bottom Transition */}
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 w-full px-6 text-center">
                    <div className="max-w-6xl mx-auto space-y-12 animate-fade-up">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-black uppercase tracking-[0.3em] mb-4 border border-primary/20">
                                Willkommen bei uns
                            </span>
                            <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                                <span className="text-primary block">
                                    Elternverein
                                </span>
                                <span className="block opacity-90 transform -translate-y-2 md:-translate-y-4">
                                    HTL Mödling
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl md:text-3xl text-foreground font-semibold max-w-2xl mx-auto leading-tight opacity-80">
                            {t('home.heroDesc')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                            <Link to="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground
                                           rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40">
                                {t('home.getInvolved')}
                            </Link>
                            <Link to="/about"
                                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg
                                           bg-surface/50 backdrop-blur-md text-foreground border border-border
                                           hover:bg-surface transition-all shadow-xl">
                                {t('home.learnMore')}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-40">
                    <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                </div>
            </header>

            {/* ── Bento Grid Section ── */}
            <section className="container mx-auto px-4 mt-32 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Unsere Services</span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{t('nav.services')}</h2>
                    <p className="text-foreground/60 text-xl max-w-2xl mx-auto font-medium">Innovation trifft Gemeinschaft – Entdecken Sie unsere Vorteile.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <Link
                            key={i}
                            to={benefit.link}
                            className={`group relative overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${benefit.className}`}
                        >
                            <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                                <benefit.icon size={160} strokeWidth={1} />
                            </div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform border border-primary/20">
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">{benefit.title}</h3>
                                <p className="text-foreground/70 font-semibold leading-relaxed max-w-sm text-lg">
                                    {benefit.desc}
                                </p>
                                <div className="mt-auto pt-10 flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t('home.learnMore')} <ArrowRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Latext News Section ── */}
            <section className="container mx-auto px-4 mt-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">{t('home.insightsUpdates')}</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">{t('home.latestNews')}</h2>
                    </div>
                    <Link to="/news" className="group flex items-center gap-2 text-foreground/60 hover:text-primary font-bold transition-all text-lg">
                        {t('home.viewAll')} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {newsItems.map((item, i) => (
                        <article key={i} className="flex flex-col group cursor-pointer bg-surface/50 p-4 rounded-[2.5rem] border border-transparent hover:border-border hover:bg-white dark:hover:bg-slate-900 transition-all duration-300">
                            <div className={`rounded-[2rem] aspect-[4/3] mb-6 overflow-hidden relative shadow-inner ${item.image}`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity" />
                                <div className="absolute top-5 left-5 z-10">
                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getTypeColor(item.type)}`}>
                                        {t(`home.tags.${item.type}`)}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 pb-4 space-y-4">
                                <div className="flex items-center gap-2 text-sm text-foreground/40 font-bold uppercase tracking-wide">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/60 font-medium line-clamp-2 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
