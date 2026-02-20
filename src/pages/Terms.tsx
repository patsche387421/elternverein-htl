import { Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Terms = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('terms.title')}
                description={t('terms.desc')}
            />

            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
                    <Scale size={32} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('terms.title')}</h1>
            </div>

            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <p>
                    Placeholder for Terms & Conditions / Rules of Procedure (Geschäftsordnung).
                </p>
            </div>
        </div>
    );
};

export default Terms;
