import { useState } from 'react';
import { Calendar, FileText, Bell, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const News = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'news', 'event', 'protocol'];

    const newsItems = [
        {
            id: 1,
            title: t('news.items.agm.title'),
            date: "15.10.2025",
            type: "event",
            desc: t('news.items.agm.desc'),
            icon: Calendar
        },
        {
            id: 2,
            title: t('news.items.sga.title'),
            date: "01.10.2025",
            type: "protocol",
            desc: t('news.items.sga.desc'),
            icon: FileText
        },
        {
            id: 3,
            title: t('news.items.funding.title'),
            date: "20.09.2025",
            type: "news",
            desc: t('news.items.funding.desc'),
            icon: Bell
        },
        {
            id: 4,
            title: t('news.items.parentsDay.title'),
            date: "10.12.2025",
            type: "event",
            desc: t('news.items.parentsDay.desc'),
            icon: Calendar
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'event': return 'bg-violet-600 text-white';
            case 'protocol': return 'bg-sky-600 text-white';
            default: return 'bg-emerald-600 text-white';
        }
    };

    const filteredNews = newsItems.filter(item =>
        selectedCategory === 'all' || item.type === selectedCategory
    );

    return (
        <main className="flex-grow">
            <SEO
                title={t('news.title')}
                description={t('news.desc')}
                keywords="News, Aktuelles, Termine, Protokolle, HTL Mödling, Elternverein"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-[2rem] mb-4 shadow-inner">
                        <Bell size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('news.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('news.desc')}
                    </p>
                </header>

                {/* Category Filter Bar */}
                <nav className="flex flex-wrap justify-center gap-3" aria-label="News Kategorien">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${selectedCategory === cat
                                ? 'bg-primary text-white shadow-xl shadow-primary/25 -translate-y-1'
                                : 'bg-surface border border-border text-foreground/60 hover:border-primary/40 hover:text-primary'
                                }`}
                        >
                            {t(`news.filters.${cat}`)}
                        </button>
                    ))}
                </nav>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((item) => (
                        <article key={item.id} className="bg-card dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-border hover:shadow-2xl hover:border-primary/30 transition-all group flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${getTypeColor(item.type)}`}>
                                    {t(`home.tags.${item.type}`)}
                                </span>
                                <div className="flex items-center gap-2 text-sm text-foreground/30 font-bold uppercase tracking-wider">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-foreground/60 font-medium leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>

                            <div className="pt-6 border-t border-border flex items-center justify-between group-hover:border-primary/20 transition-colors">
                                <div className="flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest">
                                    <item.icon size={20} strokeWidth={2.5} />
                                    <span>{t('home.viewAll')}</span>
                                </div>
                                <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default News;
