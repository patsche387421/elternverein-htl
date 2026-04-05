import { Heart, Info, ArrowRight, CheckCircle, MessagesSquare, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const SocialSupport = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('services.support')}
                description={t('services.supportDesc')}
                keywords="Soziale Unterstützung, HTL Mödling, Elternverein, Finanzielle Hilfe"
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
                    src="/pics/sozialeUnterstützung.webp"
                    alt={t('services.support')}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
                
                <div className="relative z-10 text-center space-y-4 px-4 max-w-4xl animate-fade-up">
                    <div className="inline-flex p-3 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 text-primary mb-4">
                        <Heart size={40} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-sm">
                        {t('services.support')}
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('services.supportDesc')}
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20 max-w-5xl space-y-24">
                {/* Intro Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                            Niemand wird <br /><span className="text-primary text-glow-primary">im Stich gelassen.</span>
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                            Ein zentrales Anliegen des Elternvereins ist es, Schülern aus finanziell schlechter gestellten Familien die Teilnahme an Schulveranstaltungen zu ermöglichen. 
                            Wir helfen dort, wo staatliche Förderungen nicht ausreichen oder zu spät kommen.
                        </p>
                        <ul className="space-y-4">
                            {['Zuschuss zu Schulwochen (Sport- & Projektwochen)', 'Unterstützung bei Materialkosten', 'Individuelle Soforthilfe'].map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80 font-bold group">
                                    <CheckCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface p-10 rounded-3xl border border-border shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 end-0 p-8 text-primary/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <Heart size={150} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <Info className="text-primary" />
                            Wer kann ansuchen?
                        </h3>
                        <p className="text-foreground/70 mb-6 font-medium leading-relaxed">
                            Ansuchen können alle Erziehungsberechtigten von Schülern der HTL Mödling, die Mitglied im Elternverein sind. 
                            Die Unterstützung erfolgt diskret und unbürokratisch nach Prüfung der sozialen Bedürftigkeit.
                        </p>
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="text-sm font-bold text-primary italic">
                                * Alle Anträge werden streng vertraulich behandelt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10 space-y-10">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-black uppercase tracking-widest text-primary">Ablauf der Förderung</h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Antrag stellen', desc: 'Senden Sie uns eine Anfrage über das Kontaktformular oder per E-Mail.' },
                            { step: '02', title: 'Prüfung', desc: 'Der Vorstand prüft Ihr Ansuchen zeitnah und diskret auf Übereinstimmung mit unseren Richtlinien.' },
                            { step: '03', title: 'Auszahlung', desc: 'Nach Genehmigung wird der Betrag direkt an die Schule oder den Veranstalter überwiesen.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-all group">
                                <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors block mb-4">{item.step}</span>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-foreground/60 text-sm font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="bg-surface border border-border p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
                        <div className="inline-flex p-4 bg-background rounded-full shadow-xl">
                            <MessagesSquare size={32} className="text-primary" />
                        </div>
                        <h2 className="text-4xl font-black tracking-tight leading-tight">
                            Haben Sie Fragen zur Förderung?
                        </h2>
                        <p className="text-lg text-foreground/60 font-medium">
                            Wir beraten Sie gerne unverbindlich und unterstützen Sie beim Antragsprozess.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link
                                to="/kontakt?thema=unterstuetzung"
                                className="px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                            >
                                Jetzt Kontaktieren <ArrowRight size={20} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SocialSupport;
