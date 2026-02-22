import { Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Terms = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('terms.title')}
                description={t('terms.desc')}
                keywords="AGB, Geschäftsordnung, Bedingungen, Elternverein, HTL Mödling"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-amber-500/10 text-amber-500 rounded-[2rem] mb-4 shadow-inner">
                        <Scale size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('terms.title')}</h1>
                </header>

                <section className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-amber-500/5 pointer-events-none">
                        <Scale size={150} strokeWidth={1} />
                    </div>

                    <article className="prose prose-lg dark:prose-invert max-w-none relative z-10">
                        <p className="text-xl font-medium leading-relaxed text-foreground/70">
                            Platzhalter für AGB / Geschäftsordnung (Rules of Procedure).
                        </p>
                        <div className="mt-12 p-8 border border-dashed border-border rounded-3xl bg-surface/50 text-center">
                            <p className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Inhalt wird geladen...</p>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default Terms;
