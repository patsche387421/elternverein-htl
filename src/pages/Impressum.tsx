import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Impressum = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('footer.impressum')}
                description="Impressum"
            />

            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        <Info size={24} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('footer.impressum')}</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('impressum.owner')}</h3>
                        <p>
                            <strong>Elternverein an der HTL Mödling</strong><br />
                            Technikerstraße 1-5<br />
                            2340 Mödling<br />
                            Österreich
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('impressum.contact')}</h3>
                        <p>
                            E-Mail: office@elternverein.today<br />
                            Web: www.elternverein.today
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('impressum.zvr')}</h3>
                        <p>123456789</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('impressum.purpose')}</h3>
                        <p>
                            {t('impressum.purposeDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
