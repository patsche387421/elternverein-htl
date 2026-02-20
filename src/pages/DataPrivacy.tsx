import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const DataPrivacy = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('footer.privacy')}
                description="Datenschutzerklärung"
            />

            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-success/10 text-success rounded-xl">
                        <Shield size={24} />
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white break-words hyphens-auto leading-tight">{t('footer.privacy')}</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <p className="lead">
                        {t('privacy.intro')}
                    </p>

                    <h3>{t('privacy.responsible')}</h3>
                    <p>
                        Elternverein an der HTL Mödling<br />
                        Technikerstraße 1-5, 2340 Mödling
                    </p>

                    <h3>{t('privacy.collection')}</h3>
                    <p>
                        {t('privacy.collectionDesc')}
                    </p>

                    <h3>{t('privacy.rights')}</h3>
                    <p>
                        {t('privacy.rightsDesc')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataPrivacy;
