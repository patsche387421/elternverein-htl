import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowLeft, Share2, Printer, MapPin, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { newsData } from '../data/newsData';

const NewsArticle = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const article = newsData.find(item => item.id === id);

    if (!article) {
        return <Navigate to="/news" replace />;
    }

    const handleShare = async () => {
        const url = window.location.href;
        const title = t(article.titleKey);

        if (navigator.share) {
            try {
                await navigator.share({ title, url });
            } catch {
                // User cancelled — ignore
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch {
                // Clipboard not available
            }
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const bodyParagraphs = t(article.bodyKey).split('\n\n');

    return (
        <main className="flex-grow bg-background pb-20">
            <SEO
                title={`${t(article.titleKey)} | ${t('home.heroTitleMain')}`}
                description={t(article.descKey)}
            />

            {/* Back Button & Intro Header */}
            <div className="container mx-auto px-4 py-6 md:py-8">
                <Link
                    to="/news"
                    className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary font-bold transition-all uppercase tracking-widest text-xs mb-6 md:mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {t('nav.news')}
                </Link>

                <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
                        <span className="px-3 py-1 bg-primary/10 rounded-lg">{t(`news.filters.${article.type}`)}</span>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{article.date}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter text-foreground mb-6 md:mb-8 leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {t(article.titleKey)}
                    </h1>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[40svh] md:h-[55svh] lg:h-[65svh] relative overflow-hidden mb-8 md:mb-16 animate-in fade-in zoom-in-95 duration-1000">
                <img
                    src={article.image}
                    alt={t(article.titleKey)}
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    {/* Mobile: Quick Actions Bar (above content) */}
                    <div className="flex items-center justify-between mb-8 lg:hidden animate-in fade-in duration-500">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                                EV
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm">{t('newsArticle.authorName')}</p>
                                <p className="text-xs text-foreground/40 font-medium">{article.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleShare}
                                className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all active:scale-95"
                                aria-label={t('newsArticle.share')}
                            >
                                {copied ? <Check size={18} className="text-success" /> : <Share2 size={18} />}
                            </button>
                            <button
                                onClick={handlePrint}
                                className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all active:scale-95"
                                aria-label={t('newsArticle.print')}
                            >
                                <Printer size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Sidebar info — hidden on mobile, shown on desktop */}
                        <aside className="hidden lg:block lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
                            <div className="p-6 bg-surface rounded-3xl border border-border space-y-6 sticky top-8">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40">{t('newsArticle.author')}</h4>
                                    <p className="font-bold text-foreground">{t('newsArticle.authorName')}</p>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-border">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40">{t('newsArticle.category')}</h4>
                                    <p className="font-bold text-primary capitalize">{t(`news.filters.${article.type}`)}</p>
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-border">
                                    <button
                                        onClick={handleShare}
                                        className="flex-1 h-10 rounded-xl bg-background border border-border flex items-center justify-center gap-2 text-foreground/60 hover:text-primary hover:border-primary transition-all text-xs font-bold uppercase tracking-widest"
                                        aria-label={t('newsArticle.share')}
                                    >
                                        {copied ? <Check size={16} className="text-success" /> : <Share2 size={16} />}
                                        <span>{copied ? t('newsArticle.shareCopied') : t('newsArticle.share')}</span>
                                    </button>
                                    <button
                                        onClick={handlePrint}
                                        className="flex-1 h-10 rounded-xl bg-background border border-border flex items-center justify-center gap-2 text-foreground/60 hover:text-primary hover:border-primary transition-all text-xs font-bold uppercase tracking-widest"
                                        aria-label={t('newsArticle.print')}
                                    >
                                        <Printer size={16} />
                                        <span>{t('newsArticle.print')}</span>
                                    </button>
                                </div>
                            </div>

                            {article.type === 'event' && (
                                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        <MapPin size={20} />
                                        <span className="font-bold">{t('newsArticle.locationTitle')}</span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                        {t('newsArticle.locationDesc')}
                                    </p>
                                </div>
                            )}
                        </aside>

                        {/* Article Text */}
                        <article className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 lg:delay-500">
                            {/* Lead paragraph */}
                            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-[1.4] first-letter:text-5xl md:first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:me-3 first-letter:float-start">
                                {t(article.descKey)}
                            </p>

                            {/* Body text */}
                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/70 font-medium leading-relaxed space-y-6">
                                {bodyParagraphs.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}

                                <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground mt-10 md:mt-12 mb-4 md:mb-6">
                                    {t('newsArticle.details')}
                                </h3>
                                <ul className="space-y-3 md:space-y-4 list-none ps-0">
                                    <li className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span>{t('newsArticle.detailStart')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span>{t('newsArticle.detailLocation')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span>{t('newsArticle.detailRegistration')}</span>
                                    </li>
                                </ul>

                                <p className="mt-10 md:mt-12 text-sm italic opacity-50">
                                    {t('newsArticle.contactNote')}
                                </p>
                            </div>

                            {/* Mobile: Event Location Card */}
                            {article.type === 'event' && (
                                <div className="p-5 md:p-6 bg-primary/5 rounded-2xl md:rounded-3xl border border-primary/10 space-y-3 md:space-y-4 lg:hidden">
                                    <div className="flex items-center gap-3 text-primary">
                                        <MapPin size={20} />
                                        <span className="font-bold">{t('newsArticle.locationTitle')}</span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                        {t('newsArticle.locationDesc')}
                                    </p>
                                </div>
                            )}

                            {/* Call to Action */}
                            <div className="mt-12 md:mt-16 p-6 md:p-8 lg:p-12 bg-surface rounded-2xl md:rounded-[2.5rem] border border-border shadow-inner flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                                <div className="space-y-2 text-center md:text-start">
                                    <h4 className="text-xl md:text-2xl font-black tracking-tight">{t('newsArticle.ctaTitle')}</h4>
                                    <p className="text-foreground/60 font-medium">{t('newsArticle.ctaDesc')}</p>
                                </div>
                                <Link to="/kontakt" className="w-full md:w-auto text-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                                    {t('newsArticle.ctaButton')}
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewsArticle;
