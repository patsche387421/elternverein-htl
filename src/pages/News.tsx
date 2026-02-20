import { useState } from 'react';
import { Calendar, FileText, Bell } from 'lucide-react';
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
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('news.title')}
                description={t('news.desc')}
            />

            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
                    <Bell size={32} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('news.title')}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('news.desc')}
                </p>
            </div>

            {/* Category Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${selectedCategory === cat
                            ? 'bg-primary text-white shadow-lg shadow-primary/25 -translate-y-1'
                            : 'bg-surface border border-border text-foreground/60 hover:border-primary/40 hover:text-primary'
                            }`}
                    >
                        {t(`news.filters.${cat}`)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getTypeColor(item.type)}`}>
                                {t(`home.tags.${item.type}`)}
                            </span>
                            <span className="text-sm text-gray-400 font-mono">{item.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {item.desc}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            <item.icon size={18} />
                            <span>{t('home.viewAll')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
