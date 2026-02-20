import { FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Statutes = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('statutes.title')}
                description={t('statutes.desc')}
            />

            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
                    <FileText size={32} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('statutes.title')}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('statutes.desc')}
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        The statutes define the purpose, organization, and rules of the Parents' Association.
                        They are the legal foundation of our work.
                    </p>
                    {/* Placeholder content */}
                    <h3>§1 Name and Seat</h3>
                    <p>The association bears the name "Elternverein der HTL Mödling"...</p>
                    <h3>§2 Purpose</h3>
                    <p>The purpose of the association is to promote the interests of...</p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center">
                        <Download size={20} />
                        {t('statutes.download')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Statutes;
