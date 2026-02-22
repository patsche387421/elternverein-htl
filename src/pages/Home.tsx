import { ArrowRight, Calendar, Users, Heart, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const { t } = useTranslation();

    const newsItems = [
        {
            type: 'event',
            title: t('news.items.festival.title'),
            date: "15.10.2026",
            desc: t('news.items.festival.desc'),
            image: "/elternverein/htl-moe-sportplatz_01_web.535x300.jpg"
        },
        {
            type: 'protocol',
            title: t('news.items.jhv.title'),
            date: "22.09.2025",
            desc: t('news.items.jhv.desc'),
            image: "/elternverein/htl-gebaeude-von-oben.avif"
        },
        {
            type: 'news',
            title: t('news.items.mentalHealth.title'),
            date: "10.03.2025",
            desc: t('news.items.mentalHealth.desc'),
            image: "/elternverein/htl-schueler-teamarbeit.jpg"
        }
    ];

    const getTypeColor = (_type: string) => {
        return 'bg-primary text-primary-foreground';
    };

    return (
        <main className="flex-grow pb-20">
            <SEO
                title={t('home.heroTitle')}
                description={t('home.heroDesc')}
                keywords="Elternverein, HTL Mödling, Schule, Unterstützung, Gemeinschaft"
            />

            {/* ── Hero Section ── */}
            <header className="relative w-full overflow-hidden bg-background min-h-[85svh] flex items-center">

                {/* BACKGROUND LAYER: Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.jpg"
                        alt="HTL Mödling Hauptgebäude"
                        className="w-full h-full object-cover object-center transition-opacity duration-1000"
                        loading="eager"
                    />

                    {/* Dynamic Glass-Effect Overlay - Gradient from Left for Desktop / Centered for Mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-black/90 lg:via-black/50" />

                    {/* Dark Mode Overlay Adjustment */}
                    <div className="absolute inset-0 bg-background/20 dark:bg-background/40 backdrop-blur-[1px]" />

                    {/* Bottom Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 w-full px-6">
                    <div className="max-w-6xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
                        <div className="space-y-6 max-w-4xl">
                            {/* New Badge */}
                            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/20 backdrop-blur-md">
                                {t('home.heroBadge')}
                            </span>

                            {/* Fluid Typography Title */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-balance">
                                {t('home.heroTitleFluid')}
                            </h1>

                            {/* Redesigned Subtitle */}
                            <p className="text-lg md:text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
                                {t('home.heroSubtitleFluid')}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-10">
                            <Link to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground
                                           rounded-2xl font-black uppercase tracking-widest text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40
                                           focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
                                {t('home.getInvolved')}
                            </Link>
                            <Link to="/about"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-base
                                           bg-white/10 backdrop-blur-md text-white border border-white/20
                                           hover:bg-white/20 transition-all shadow-xl
                                           focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
                                {t('home.learnMore')}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* New Animated Scroll Indicator - Hidden on Mobile/Tablet per User Request */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-3 animate-bounce cursor-pointer group">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                        {t('home.learnMoreScroll')}
                    </span>
                    <div className="w-1.5 h-12 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                </div>
            </header>

            {/* ── Benefit Grid Section (Refactored) ── */}
            <section className="bg-surface py-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Karte 1: Projektförderung */}
                        <Link to={t('home.benefits.projLink')}
                            className="group bg-background rounded-2xl shadow-md p-8 border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 group-hover:bg-accent-gold group-hover:text-white transition-all duration-300">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.projTitle')}
                            </h3>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.proj')}
                            </p>
                        </Link>

                        {/* Karte 2: Soziale Unterstützung */}
                        <Link to={t('home.benefits.socLink')}
                            className="group bg-background rounded-2xl shadow-md p-8 border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 bg-accent-silver/10 rounded-xl flex items-center justify-center text-accent-silver mb-6 group-hover:scale-110 group-hover:bg-accent-silver group-hover:text-white transition-all duration-300">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.socTitle')}
                            </h3>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.soc')}
                            </p>
                        </Link>

                        {/* Karte 3: Gemeinschaft */}
                        <Link to={t('home.benefits.commLink')}
                            className="group bg-background rounded-2xl shadow-md p-8 border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.commTitle')}
                            </h3>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.comm')}
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Social Proof Section ── */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                            {t('home.insightsUpdates')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                            {t('home.socialProof.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-surface/50 rounded-2xl p-10 border border-border shadow-sm hover:shadow-md transition-shadow">
                            <blockquote className="text-xl font-medium text-foreground/80 leading-relaxed mb-8">
                                {t('home.socialProof.s1')}
                            </blockquote>
                            <cite className="block text-lg font-bold text-primary not-italic uppercase tracking-wider">
                                {t('home.socialProof.a1')}
                            </cite>
                        </div>
                        <div className="bg-surface/50 rounded-2xl p-10 border border-border shadow-sm hover:shadow-md transition-shadow">
                            <blockquote className="text-xl font-medium text-foreground/80 leading-relaxed mb-8">
                                {t('home.socialProof.s2')}
                            </blockquote>
                            <cite className="block text-lg font-bold text-primary not-italic uppercase tracking-wider">
                                {t('home.socialProof.a2')}
                            </cite>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-24 text-primary/5 select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                    <Users size={400} />
                </div>
            </section>


            {/* ── Latext News Section ── */}
            <section className="container mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 max-w-7xl mx-auto">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">{t('home.insightsUpdates')}</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">{t('home.latestNews')}</h2>
                    </div>
                    <Link to="/news" className="group flex items-center gap-2 text-foreground/60 hover:text-primary font-bold transition-all text-lg tracking-tight">
                        {t('home.viewAll')} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {newsItems.map((item, i) => (
                        <article key={i} className="flex flex-col group cursor-pointer bg-surface/50 p-4 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="rounded-3xl aspect-[4/3] mb-6 overflow-hidden relative shadow-inner">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
                                <div className="absolute top-5 left-5 z-10">
                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider ${getTypeColor(item.type)}`}>
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

            {/* ── FAQ Section (Accordion) ── */}
            <section className="bg-surface py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black tracking-tighter mb-4">
                                {t('home.faq.title')}
                            </h2>
                            <p className="text-foreground/60 text-lg">
                                {t('home.faq.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <details
                                    key={i}
                                    className="group bg-background rounded-2xl border border-border overflow-hidden transition-all duration-300 open:shadow-lg open:shadow-primary/5"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none">
                                        <span className="group-open:text-primary transition-colors pr-6">
                                            {t(`home.faq.q${i}`)}
                                        </span>
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-open:rotate-180 transition-transform">
                                            <ArrowRight size={18} className="rotate-90" />
                                        </div>
                                    </summary>
                                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed font-medium animate-fade-down duration-200">
                                        {t(`home.faq.a${i}`)}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
