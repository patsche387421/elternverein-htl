import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Impressum = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('footer.impressum')}
                description="Impressum des Elternvereins der HTL Mödling"
                keywords="Impressum, Offenlegung, Kontakt, Elternverein, HTL Mödling"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-[2rem] mb-4 shadow-inner">
                        <Info size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('footer.impressum')}</h1>
                </header>

                <div className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] border border-border shadow-2xl space-y-12">
                    <section className="prose prose-lg dark:prose-invert max-w-none grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4">{t('impressum.owner')}</h2>
                                <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                                    <span className="font-bold text-foreground">Elternverein an der HTL Mödling</span><br />
                                    Technikerstraße 1-5<br />
                                    2340 Mödling<br />
                                    Österreich
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4">{t('impressum.contact')}</h2>
                                <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                                    E-Mail: <a href="mailto:office@elternverein.today" className="text-primary hover:underline">office@elternverein.today</a><br />
                                    Web: <a href="https://www.elternverein.today" className="text-primary hover:underline">www.elternverein.today</a>
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4">{t('impressum.zvr')}</h2>
                                <p className="text-lg font-medium text-foreground/80">123456789</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-4">{t('impressum.purpose')}</h2>
                                <p className="text-lg font-medium text-foreground/70 leading-relaxed">
                                    {t('impressum.purposeDesc')}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Impressum;
