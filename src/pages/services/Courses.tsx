import { GraduationCap, Award, Zap, HardHat, Cog, Monitor, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Courses = () => {
    const { t } = useTranslation();

    const currentCourses = [
        { 
            title: 'ECDL Zertifizierung', 
            icon: Monitor, 
            desc: 'Der Europäische Computer Führerschein für alle Jahrgänge.', 
            badge: 'Start: WS 2025' 
        },
        { 
            title: 'Spritzgusstechnik', 
            icon: Cog, 
            desc: 'Spezialausbildung für Maschinenbau und Kunststofftechnik.', 
            badge: 'Restplätze' 
        },
        { 
            title: 'Sicherheitsschulung', 
            icon: HardHat, 
            desc: 'Zusatzqualifikation für den Werkstattbetrieb der Oberstufe.', 
            badge: 'Pflichtmodul' 
        }
    ];

    return (
        <main className="flex-grow">
            <SEO
                title={t('services.courses')}
                description={t('services.coursesDesc')}
                keywords="Kursangebot, HTL Mödling, Elternverein, Zertifikate, Weiterbildung"
            />

            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Back Button */}
                <div className="absolute top-8 left-8 z-20">
                    <Link 
                        to="/services" 
                        className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-md border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-primary hover:text-black transition-all group shadow-2xl"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Zur Übersicht
                    </Link>
                </div>
                
                <img
                    src="/pics/Kursangebot.png"
                    alt={t('services.courses')}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20" />
                
                <div className="relative z-10 text-center space-y-4 px-4 max-w-4xl animate-fade-up">
                    <div className="inline-flex p-3 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 text-primary mb-4">
                        <GraduationCap size={40} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-sm">
                        {t('services.courses')}
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-black max-w-2xl mx-auto leading-relaxed uppercase tracking-widest drop-shadow-lg">
                        Mehr als nur Unterricht
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20 max-w-7xl space-y-24">
                {/* Intro Section */}
                <section className="max-w-4xl mx-auto text-center space-y-8 scroll-reveal pt-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Zusatzqualifikationen <span className="text-primary">für den Vorsprung.</span></h2>
                    <p className="text-xl text-foreground/60 leading-relaxed font-bold">
                        Wir unterstützen den Erwerb von international anerkannten Zertifikaten und Spezialausbildungen, 
                        die über den regulären Lehrplan hinausgehen. Damit stärken wir die Jobchancen unserer Absolventen.
                    </p>
                </section>

                {/* Course Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {currentCourses.map((course, i) => (
                        <div key={i} className="group bg-surface rounded-[2.5rem] p-10 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 end-0 p-8 text-primary/5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                                <course.icon size={150} />
                            </div>
                            
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                                <course.icon size={32} />
                            </div>

                            <div className="space-y-4 flex-grow">
                                <span className="inline-flex px-3 py-1 bg-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
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
                                Details anfragen <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </section>

                {/* Benefits Showcase */}
                <section className="bg-background border border-border p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase block">Warum Zusatzkurse?</span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
                                    Dein Plus im <br />Lebenslauf.
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Award, label: 'Zertifizierung', detail: 'Internationale Gültigkeit' },
                                    { icon: Zap, label: 'Vorteile', detail: 'Job-Markt-Vorteil' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center p-4 bg-surface rounded-2xl border border-border shadow-sm">
                                        <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0"><item.icon size={24} /></div>
                                        <div>
                                            <p className="font-black text-sm tracking-tight">{item.label}</p>
                                            <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                'Kostengünstiger Zugang durch den Elternverein',
                                'Direkt am Schulstandort nach dem Unterricht',
                                'Praxisnahe Ausbildung durch Fachexperten',
                                'Offizielle Zeugnisse und Zertifikate'
                            ].map((text, i) => (
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
                    <p className="text-foreground/50 font-medium">Haben Sie einen Kursvorschlag oder möchten Sie sich anmelden?</p>
                    <Link
                        to="/kontakt?thema=kurse"
                        className="inline-flex px-12 py-6 bg-primary text-black rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30"
                    >
                        Anmeldung & Info
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Courses;
