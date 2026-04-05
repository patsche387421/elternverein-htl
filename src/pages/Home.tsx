import { useEffect, useMemo } from 'react';
import { ArrowRight, Calendar, Users, Heart, Activity, Handshake, BookOpen, PartyPopper } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { newsData } from '../data/newsData';

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const newsItems = useMemo(() => newsData.slice(0, 3), []);

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
                <div className="absolute inset-0 z-0 bg-black">
                    <img
                        src="/pics/NormalZuCartoon_opt.webp"
                        alt="Schüler arbeiten an einem Projekt mit dem Robodog in der HTL Mödling"
                        className="w-full h-full object-cover object-[center_30%] opacity-80"
                        fetchPriority="high"
                        loading="eager"
                    />
                    {/* Uniform Dark Overlay for maximum readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/60" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 w-full px-6 pt-20">
                    <div className="max-w-6xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
                        <div className="space-y-6 max-w-4xl">
                            {/* New Badge - Solid Accent Warm */}
                            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-primary text-black text-sm font-black uppercase tracking-widest shadow-xl border border-primary/50">
                                {t('home.heroBadge')}
                            </span>
                            {/* Fluid Typography Title */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white drop-shadow-xl text-balance">
                                {t('home.heroTitleFluid')}
                            </h1>

                            {/* Redesigned Subtitle */}
                            <p className="text-lg md:text-xl text-slate-200 max-w-xl font-medium leading-relaxed drop-shadow-md">
                                {t('home.heroSubtitleFluid')}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-10">
                            <Link to="/kontakt"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black
                                           rounded-xl font-black uppercase tracking-widest text-base hover:scale-105 hover:bg-white active:scale-95 transition-all shadow-xl shadow-primary/40
                                           focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
                                {t('home.getInvolved')}
                            </Link>
                            <a href="#nutzen"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black uppercase tracking-widest text-base
                                           bg-black/30 backdrop-blur-md text-white border border-white/20
                                           hover:bg-white/20 transition-all shadow-xl
                                           focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
                                {t('home.learnMore')}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Benefit Grid Section (5 Pillars) ── */}
            <section id="nutzen" className="bg-surface py-20 relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
                        
                        {/* 1. Fördern */}
                        <Link to={t('home.benefits.projLink')}
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 delay-100 group bg-background rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                                <Activity size={28} strokeWidth={2.5}/>
                            </div>
                            <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.projTitle')}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.proj')}
                            </p>
                        </Link>

                        {/* 2. Unterstützen */}
                        <Link to="/services/kurse"
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 delay-200 group bg-background rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                                <Handshake size={28} strokeWidth={2.5}/>
                            </div>
                            <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.suppTitle')}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.supp')}
                            </p>
                        </Link>

                        {/* 3. Helfen */}
                        <Link to="/services/unterstuetzung"
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 delay-300 group bg-background rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                                <Heart size={28} strokeWidth={2.5}/>
                            </div>
                            <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.helpTitle')}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.help')}
                            </p>
                        </Link>

                        {/* 4. Informieren */}
                        <Link to="/services/nachhilfe"
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 delay-500 group bg-background rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                                <BookOpen size={28} strokeWidth={2.5}/>
                            </div>
                            <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.infoTitle')}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.info')}
                            </p>
                        </Link>

                        {/* 5. Unterhalten */}
                        <Link to={t('home.benefits.entLink')}
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 delay-700 md:col-span-2 lg:col-span-1 group bg-background rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 p-6 border border-border/50 hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm">
                                <PartyPopper size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-lg font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                                {t('home.benefits.entTitle')}
                            </h3>
                            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
                                {t('home.benefits.ent')}
                            </p>
                        </Link>

                    </div>
                </div>
            </section>

            {/* ── Visual Showcases (Priority 1 & 2 integration) ── */}
            <section className="bg-background py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">
                    
                    {/* Showcase 1: Fördern & Labor */}
                    <div className="scroll-reveal opacity-0 translate-y-8 duration-1000">
                        <div className="text-center mb-10 max-w-2xl mx-auto">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Fördern in der Praxis</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">Ausrüstung für die Zukunft</h2>
                            <p className="text-foreground/60 text-lg">Mit den Elternbeiträgen finanzieren wir modernste Ausstattung, Labormaterialien und Projekte, die sonst im regulären Schulbudget keinen Platz finden.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-md group">
                                <img src="/pics/Labor_1.webp" alt="Schüler bei der Arbeit im Labor 1" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-md group ">
                                <img src="/pics/Labor_2.webp" alt="Schüler bei der Arbeit im Labor 2" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-md group">
                                <img src="/pics/Labor_3.webp" alt="Schüler bei der Arbeit im Labor 3" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-square shadow-md group ">
                                <img src="/pics/Labor_4.webp" alt="Schüler bei der Arbeit im Labor 4" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Showcase 2: Helfen & Informieren (Split) */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 scroll-reveal opacity-0 translate-y-8 duration-700 delay-100 pr-8">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase block">Helfen & Informieren</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">Gemeinschaft stärken. <br/>Präsenz zeigen.</h2>
                            <p className="text-foreground/70 text-lg leading-relaxed">
                                Neben der finanziellen Förderung organisieren wir Exkursionen, stärken den sozialen Zusammenhalt auf Schulfahrten und informieren aktiv in Präsentationen und Sitzungen über aktuelle Anliegen.
                            </p>
                            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm mt-4">
                                Unsere Leistungen <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4 scroll-reveal opacity-0 translate-y-8 duration-700 delay-300">
                             <div className="rounded-3xl overflow-hidden shadow-lg group">
                                <img src="/pics/Event_Tag der offenen Tür_1.webp" alt="Präsentation am Tag der offenen Tür" loading="lazy" decoding="async" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700" />
                             </div>
                             <div className="space-y-4">
                                <div className="rounded-3xl overflow-hidden shadow-lg group">
                                    <img src="/pics/Praesentation_1.webp" alt="Präsentation des Elternvereins" loading="lazy" decoding="async" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-lg group">
                                    <img src="/pics/Ausflug_1.webp" alt="Gruppenbild vom Schulausflug" loading="lazy" decoding="async" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700" />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Social Proof Section ── */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 scroll-reveal opacity-0 translate-y-8 duration-1000">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                            {t('home.insightsUpdates')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                            {t('home.socialProof.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-background rounded-3xl p-10 border border-primary/10 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <blockquote className="text-xl font-medium text-foreground/80 leading-relaxed mb-8">
                                {t('home.socialProof.s1')}
                            </blockquote>
                            <cite className="block text-lg font-bold text-primary not-italic tracking-wider group">
                                {t('home.socialProof.a1')}
                            </cite>
                        </div>
                        <div className="bg-background rounded-3xl p-10 border border-primary/10 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <blockquote className="text-xl font-medium text-foreground/80 leading-relaxed mb-8">
                                {t('home.socialProof.s2')}
                            </blockquote>
                            <cite className="block text-lg font-bold text-primary not-italic tracking-wider">
                                {t('home.socialProof.a2')}
                            </cite>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 end-0 p-24 text-primary/5 select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                    <Users size={400} />
                </div>
            </section>


            {/* ── Latest News Section ── */}
            <section className="container mx-auto px-6 py-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-8 duration-700">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">{t('home.insightsUpdates')}</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">{t('home.latestNews')}</h2>
                    </div>
                    <Link to="/news" className="group flex items-center gap-2 text-foreground/60 hover:text-primary font-bold transition-all text-lg tracking-tight bg-surface px-6 py-3 rounded-full hover:shadow-md">
                        {t('home.viewAll')} <ArrowRight size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {newsItems.map((item, index) => (
                        <Link 
                            to={`/news/${item.id}`}
                            key={index} 
                            className="scroll-reveal opacity-0 translate-y-8 duration-700 flex flex-col group cursor-pointer bg-surface p-3 rounded-[2rem] border border-border/50 hover:border-primary/40 hover:bg-background hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500" 
                            style={{transitionDelay: `${index * 150}ms`}}
                        >
                            <div className="rounded-[1.5rem] aspect-[4/3] mb-6 overflow-hidden relative shadow-inner">
                                <img
                                    src={item.image}
                                    alt={t(item.titleKey)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent group-hover:opacity-70 transition-opacity duration-500" />
                                <div className="absolute top-4 start-4 z-10">
                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-sm border border-white/20`}>
                                        {t(`news.filters.${item.type}`)}
                                    </span>
                                </div>
                            </div>
                            <div className="px-5 pb-5 space-y-4">
                                <div className="flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-widest">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
                                    {t(item.titleKey)}
                                </h3>
                                <p className="text-foreground/60 font-medium line-clamp-2 leading-relaxed text-base">
                                    {t(item.descKey)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── FAQ Section (Accordion) ── */}
            <section className="bg-background py-20 border-t border-border/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto scroll-reveal opacity-0 translate-y-8 duration-700">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Gut zu wissen</span>
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
                                    className="group bg-surface rounded-2xl border border-transparent hover:border-border overflow-hidden transition-all duration-300 open:shadow-lg open:shadow-primary/5 open:bg-background"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg select-none">
                                        <span className="group-open:text-primary transition-colors pe-6">
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
        </main >
    );
};

export default Home;
