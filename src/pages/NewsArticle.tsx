import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowLeft, Share2, Printer, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { newsData } from '../data/newsData';

const NewsArticle = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    const article = newsData.find(item => item.id === id);

    if (!article) {
        return <Navigate to="/news" replace />;
    }

    return (
        <main className="flex-grow bg-background pb-20">
            <SEO
                title={`${t(article.titleKey)} | parents' association`}
                description={t(article.descKey)}
            />

            {/* Back Button & Intro Header */}
            <div className="container mx-auto px-4 py-8">
                <Link 
                    to="/news" 
                    className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary font-bold transition-all uppercase tracking-widest text-xs mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {t('nav.news')}
                </Link>

                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
                        <span className="px-3 py-1 bg-primary/10 rounded-lg">{t(`news.filters.${article.type}`)}</span>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{article.date}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-8 leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {t(article.titleKey)}
                    </h1>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[50svh] md:h-[65svh] relative overflow-hidden mb-16 animate-in fade-in zoom-in-95 duration-1000">
                <img 
                    src={article.image} 
                    alt={t(article.titleKey)} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar info */}
                        <aside className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
                            <div className="p-6 bg-surface rounded-3xl border border-border space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40 italic">Autor</h4>
                                    <p className="font-bold text-foreground">Elternverein Vorstand</p>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-border">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40 italic">Kategorie</h4>
                                    <p className="font-bold text-primary capitalize">{t(`news.filters.${article.type}`)}</p>
                                </div>
                                <div className="flex gap-4 pt-4 border-t border-border">
                                    <button className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all">
                                        <Share2 size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-all">
                                        <Printer size={18} />
                                    </button>
                                </div>
                            </div>

                            {article.type === 'event' && (
                                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        <MapPin size={20} />
                                        <span className="font-bold">HTL Mödling</span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                        Die Veranstaltung findet im Hauptgebäude oder den jeweiligen Werkstätten statt.
                                    </p>
                                </div>
                            )}
                        </aside>

                        {/* Article Text */}
                        <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                            <p className="text-2xl md:text-3xl font-medium text-foreground leading-[1.4] first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                {t(article.descKey)}
                            </p>
                            
                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/70 font-medium leading-relaxed">
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>
                                <p>
                                    Hier beim Elternverein HTL Mödling setzen wir uns aktiv für die Belange der Schülerinnen und Schüler ein. Solche Events und Nachrichten sind ein wichtiger Teil unserer Kommunikation. Wir laden Sie herzlich ein, sich am Dialog zu beteiligen und unsere Projekte zu unterstützen.
                                </p>
                                
                                <h3 className="text-2xl font-black tracking-tight text-foreground mt-12 mb-6">Wichtige Details & Termine</h3>
                                <ul className="space-y-4 list-none pl-0">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                        <span>Beginn: Pünktlich laut Einladung</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                        <span>Ort: Festsaal oder per Online-Konferenz</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                        <span>Anmeldung: Über das interne Portal erforderlich</span>
                                    </li>
                                </ul>

                                <p className="mt-12 text-sm italic opacity-50">
                                    Bei Fragen wenden Sie sich bitte an unser Büro unter office@elternverein.today
                                </p>
                            </div>
                            
                            {/* Call to Action */}
                            <div className="mt-16 p-8 md:p-12 bg-surface rounded-[2.5rem] border border-border shadow-inner flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-2 text-center md:text-left">
                                    <h4 className="text-2xl font-black tracking-tight">Haben Sie Fragen dazu?</h4>
                                    <p className="text-foreground/60 font-medium">Wir helfen Ihnen gerne bei Unklarheiten weiter.</p>
                                </div>
                                <Link to="/kontakt" className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 whitespace-nowrap">
                                    Kontakt aufnehmen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewsArticle;
