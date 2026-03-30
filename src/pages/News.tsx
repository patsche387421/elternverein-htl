import { useState } from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { newsData, type NewsCategory } from '../data/newsData';

const News = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all');

    const categories: NewsCategory[] = ['all', 'news', 'event', 'protocol'];

    const filteredNews = newsData.filter(item =>
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
                <header className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-2xl mb-4 shadow-inner">
                        <Bell size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('news.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('news.desc')}
                    </p>
                </header>

                {/* Category Filter Bar */}
                <nav className="flex flex-wrap justify-center gap-3 animate-in fade-in duration-700 delay-150" aria-label={t('newsAria.categories', 'News Kategorien')}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105
                                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none
                                ${selectedCategory === cat
                                    ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/25 -translate-y-1'
                                    : 'bg-surface border border-border text-foreground/60 hover:border-primary/40 hover:text-primary'
                                }`}
                        >
                            {t(`news.filters.${cat}`)}
                        </button>
                    ))}
                </nav>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((item, index) => (
                        <Link 
                            to={`/news/${item.id}`} 
                            key={item.id} 
                            className="bg-card rounded-3xl p-4 shadow-sm border border-border hover:shadow-2xl hover:border-primary/40 transition-all group flex flex-col relative overflow-hidden animate-in fade-in slide-in-from-bottom-8"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                        >
                            {/* Feature Image */}
                            <div className="rounded-2xl aspect-[16/10] mb-6 overflow-hidden relative shadow-inner">
                                <img
                                    src={item.image}
                                    alt={t(item.titleKey)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent group-hover:opacity-70 transition-opacity duration-500" />
                                <div className="absolute top-4 start-4 z-10">
                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-sm border border-white/20`}>
                                        {t(`news.filters.${item.type}`)}
                                    </span>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-col flex-grow relative z-10">
                                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-3">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>

                                <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {t(item.titleKey)}
                                </h3>
                                
                                <p className="text-foreground/60 font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {t(item.descKey)}
                                </p>

                                <div className="pt-5 border-t border-border flex items-center justify-between group-hover:border-primary/20 transition-colors">
                                    <span className="text-sm font-bold text-foreground/50 group-hover:text-primary transition-colors uppercase tracking-widest">
                                        {t('newsArticle.readArticle')}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transform group-hover:translate-x-1 transition-all">
                                        <ArrowRight size={16} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default News;
