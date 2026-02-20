import { ArrowRight, Calendar, Users, Heart, FileText, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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

            {/* Modern Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden rounded-b-[3rem] shadow-2xl">
                {/* Background Image Placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')" }}
                />

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/80 backdrop-blur-[2px]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />

                <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-balance drop-shadow-lg">
                        {t('home.heroTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed drop-shadow-md font-medium">
                        {t('home.heroDesc')}
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition transform hover:scale-105 shadow-xl border border-white/10">
                            {t('home.getInvolved')}
                        </Link>
                        <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition shadow-lg">
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
