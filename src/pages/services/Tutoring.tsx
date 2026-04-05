import { BookOpen, Search, GraduationCap, Users, ArrowRight, Info, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Tutoring = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('services.tutoring')}
                description={t('services.tutoringDesc')}
                keywords="Nachhilfe, HTL Mödling, Elternverein, Peer-to-Peer, Lernen"
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
                    src="/pics/Nachhilfe.png"
                    alt={t('services.tutoring')}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
                
                <div className="relative z-10 text-center space-y-4 px-4 max-w-4xl animate-fade-up">
                    <div className="inline-flex p-3 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 text-primary mb-4">
                        <BookOpen size={40} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-sm">
                        {t('services.tutoring')}
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-black max-w-2xl mx-auto leading-relaxed uppercase tracking-widest drop-shadow-lg">
                        Von Schülern für Schüler
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20 max-w-5xl space-y-24">
                {/* Intro Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 scroll-reveal">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase px-3 py-1 bg-primary/10 rounded-full">Gemeinsam zum Erfolg</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                                Das HTL <br /><span className="text-primary text-glow-primary">Tutoren-Netzwerk</span>
                            </h2>
                        </div>
                        <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                            Niemand kennt die Tücken einer Prüfung besser als jemand, der sie bereits bestanden hat. 
                            Unser Peer-to-Peer Nachhilfesystem bringt motivierte Oberstufenschüler mit Schülern zusammen, die Unterstützung in bestimmten Fächern benötigen.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: GraduationCap, title: 'Über 50 Tutoren', desc: 'Fächerübergreifend' },
                                { icon: Users, title: 'Faire Preise', desc: 'Innerhalb der HTL' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-surface rounded-2xl border border-border group hover:border-primary/30 transition-all">
                                    <item.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                                    <p className="text-[10px] text-foreground/50 uppercase font-black tracking-widest">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                        <div className="relative bg-surface p-10 rounded-[3rem] border border-border shadow-2xl space-y-8 overflow-hidden">
                            <div className="absolute top-0 end-0 p-8 text-primary/5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                                <BookOpen size={200} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                                <div className="p-2 bg-primary text-black rounded-lg">
                                    <Search size={20} />
                                </div>
                                Wie finde ich Nachhilfe?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Schauen Sie in den aktuellen Aushang in der Aula.',
                                    'Fragen Sie direkt bei der Schülervertretung (SV).',
                                    'Nutzen Sie unser Kontaktformular zur Vermittlung.',
                                    'Treten Sie der offiziellen Discord/Messenger-Gruppe bei.'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-primary/5 rounded-2xl transition-all group/item">
                                        <div className="mt-1 h-2 w-2 rounded-full bg-primary group-hover/item:scale-125 transition-all" />
                                        <p className="text-foreground/70 font-bold leading-tight">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="space-y-10">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Beliebte Fächer</h2>
                        <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Mathematik', 'Angewandte Informatik', 'Elektrotechnik', 'Mechanik', 'Programmierung', 'Englisch', 'Wirtschaft', 'Laborübungen'].map((tag, i) => (
                            <div key={i} className="px-6 py-4 bg-background border border-border rounded-2xl text-center font-bold hover:border-primary hover:text-primary transition-all cursor-default shadow-sm group">
                                <span className="text-sm uppercase tracking-widest">{tag}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-primary p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 text-black/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                        <GraduationCap size={300} />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[1.1]">
                            Du willst selbst <br />Tutor werden?
                        </h2>
                        <p className="text-xl md:text-2xl text-black/70 font-medium leading-relaxed">
                            Hilf deinen Mitschülern, vertiefe dein eigenes Wissen und verdiene dir etwas dazu. Wir unterstützen dich bei der Vermittlung.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/kontakt?thema=nachhilfe"
                                className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-3"
                            >
                                Jetzt als Tutor bewerben <ArrowRight size={20} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Info Card */}
                <div className="flex items-start gap-5 p-8 bg-surface border border-border rounded-3xl shadow-lg relative overflow-hidden">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                        <Info size={24} />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-black text-lg tracking-tight">Wichtiger Hinweis</h4>
                        <p className="text-foreground/60 leading-relaxed font-medium">
                            Die Nachhilfe erfolgt auf privater Basis zwischen den Schülern. Der Elternverein stellt lediglich die Plattform und die Kontakte zur Verfügung. Wir empfehlen faire Honorare zwischen 10€ und 15€ pro Stunde.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Tutoring;
