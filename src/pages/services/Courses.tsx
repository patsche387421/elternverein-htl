import { GraduationCap, Award, Zap, HardHat, Cog, Monitor, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Courses = () => {
    const { t } = useTranslation();


    return (
        <main className="flex-grow">
            <SEO
                title={t('services.courses')}
                description={t('services.coursesDesc')}
                keywords="Kursangebot, HTL Mödling, Elternverein, Zertifikate, Weiterbildung"
            />

            {/* Hero Section */}
            <header className="relative min-h-[400px] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Back Button */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                    <Link 
                        to="/services" 
                        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-background/50 backdrop-blur-md border border-white/10 rounded-xl text-xs md:text-sm font-bold text-white hover:bg-primary hover:text-black transition-all group shadow-2xl"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {t('services.coursesPage.back')}
                    </Link>
                </div>
                
                <img
                    src="/pics/Kursangebot.png"
                    alt={t('services.courses')}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20" />
                
                <div className="relative z-10 text-center space-y-4 px-4 max-w-4xl animate-fade-up pt-12 md:pt-0">
                    <div className="inline-flex p-3 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 text-primary mb-2 md:mb-4">
                        <GraduationCap className="md:w-10 md:h-10 w-8 h-8" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground drop-shadow-sm">
                        {t('services.courses')}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white font-black max-w-2xl mx-auto leading-relaxed uppercase tracking-widest drop-shadow-lg">
                        {t('services.coursesPage.subtitle')}
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20 max-w-7xl space-y-24">
                {/* Intro Section */}
                <section className="max-w-4xl mx-auto text-center space-y-8 scroll-reveal pt-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        {t('services.coursesPage.titleHighlight').split(' ').slice(0, 1).join(' ')} <span className="text-primary">{t('services.coursesPage.titleHighlight').split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-xl text-foreground/60 leading-relaxed font-bold">
                        {t('services.coursesPage.intro')}
                    </p>
                </section>

                {/* Course Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(t('services.coursesPage.items', { returnObjects: true }) as { title: string, desc: string, badge: string }[]).map((course, i) => {
                        const Icon = [Monitor, Cog, HardHat][i % 3];
                        return (
                            <div key={i} className="group bg-surface rounded-[2.5rem] p-10 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 end-0 p-8 text-primary/5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                                    <Icon size={150} />
                                </div>
                                
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                                    <Icon size={32} />
                                </div>

                                <div className="space-y-4 flex-grow">
                                    <span className="inline-flex items-center justify-center px-2 py-1 md:px-3 bg-primary/20 text-primary rounded-xl md:rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider md:tracking-widest border border-primary/20 break-words whitespace-normal text-center leading-tight">
                                        {course.badge}
                                    </span>
                                    <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-foreground/60 leading-relaxed font-medium">
                                        {course.desc}
                                    </p>
                                </div>

                                <Link
                                    to="/kontakt?thema=kurse"
                                    className="mt-10 inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs"
                                >
                                    {t('services.coursesPage.detailsBtn')} <ArrowRight size={18} />
                                </Link>
                            </div>
                        );
                    })}
                </section>

                {/* Benefits Showcase */}
                <section className="bg-background border border-border p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase block">{t('services.coursesPage.whyBadge')}</span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
                                    {t('services.coursesPage.whyTitle').split(' ').slice(0, 3).join(' ')} <br />{t('services.coursesPage.whyTitle').split(' ').slice(3).join(' ')}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {(t('services.coursesPage.benefits', { returnObjects: true }) as { label: string, detail: string }[]).map((item, i) => {
                                    const Icon = i === 0 ? Award : Zap;
                                    return (
                                        <div key={i} className="flex gap-4 items-center p-4 bg-surface rounded-2xl border border-border shadow-sm">
                                            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0"><Icon size={24} /></div>
                                            <div>
                                                <p className="font-black text-sm tracking-tight">{item.label}</p>
                                                <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest">{item.detail}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="space-y-4">
                            {(t('services.coursesPage.points', { returnObjects: true }) as string[]).map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-surface p-5 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group/item">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-black transition-all">
                                        <CheckCircle size={16} strokeWidth={3} />
                                    </div>
                                    <p className="font-bold text-foreground/80 leading-tight">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Simple Contact Link */}
                <div className="text-center space-y-6 pt-10">
                    <p className="text-foreground/50 font-medium">{t('services.coursesPage.suggestion')}</p>
                    <Link
                        to="/kontakt?thema=kurse"
                        className="inline-flex px-12 py-6 bg-primary text-black rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30"
                    >
                        {t('services.coursesPage.registerBtn')}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Courses;
