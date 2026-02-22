import { FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Statutes = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('statutes.title')}
                description={t('statutes.desc')}
                keywords="Statuten, Verein, Satzung, Elternverein, HTL Mödling, Rechtliches"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-2xl mb-4 shadow-inner">
                        <FileText size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('statutes.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('statutes.desc')}
                    </p>
                </header>

                <section className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-primary/5 pointer-events-none">
                        <FileText size={150} strokeWidth={1} />
                    </div>

                    <article className="prose prose-lg dark:prose-invert max-w-none relative z-10">
                        <p className="text-lg font-medium leading-relaxed text-foreground/80 mb-10">
                            Die Statuten definieren den Zweck, die Organisation und die Regeln des Elternvereins.
                            Sie bilden die rechtliche Grundlage unserer ehrenamtlichen Arbeit.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">§1 Name und Sitz</h3>
                                <p className="text-foreground/70">Der Verein führt den Namen "Elternverein der HTL Mödling" und hat seinen Sitz in Mödling.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">§2 Zweck</h3>
                                <p className="text-foreground/70">Der Zweck des Vereins ist die Förderung der Interessen der Schüler und Eltern im Rahmen der HTL Mödling sowie die Unterstützung bedürftiger Schüler.</p>
                            </div>
                        </div>
                    </article>

                    <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">
                            Letzte Aktualisierung: 2024
                        </div>
                        <button className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                            <Download size={20} strokeWidth={3} />
                            {t('statutes.download')}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Statutes;
