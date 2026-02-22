import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const DataPrivacy = () => {
    const { t } = useTranslation();

    return (
        <main className="flex-grow">
            <SEO
                title={t('footer.privacy')}
                description="Datenschutzerklärung des Elternvereins der HTL Mödling"
                keywords="Datenschutz, Privacy, DSGVO, Elternverein, HTL Mödling"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-emerald-500/10 text-emerald-500 rounded-[2rem] mb-4 shadow-inner">
                        <Shield size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('footer.privacy')}</h1>
                </header>

                <div className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-emerald-500/5 pointer-events-none">
                        <Shield size={150} strokeWidth={1} />
                    </div>

                    <article className="prose prose-lg dark:prose-invert max-w-none space-y-10 relative z-10">
                        <p className="text-xl font-medium leading-relaxed text-foreground/70">
                            {t('privacy.intro')}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">{t('privacy.responsible')}</h2>
                            <p className="text-foreground/80 leading-relaxed font-medium">
                                Elternverein an der HTL Mödling<br />
                                Technikerstraße 1-5, 2340 Mödling
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">{t('privacy.collection')}</h2>
                            <p className="text-foreground/70 leading-relaxed font-medium">
                                {t('privacy.collectionDesc')}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">{t('privacy.rights')}</h2>
                            <p className="text-foreground/70 leading-relaxed font-medium">
                                {t('privacy.rightsDesc')}
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default DataPrivacy;
