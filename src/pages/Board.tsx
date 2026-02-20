import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Board = () => {
    const { t } = useTranslation();

    const members = [
        { role: t('board.roles.chair'), name: "Max Mustermann", email: "obmann@elternverein.today" },
        { role: t('board.roles.viceChair'), name: "Julia Sommer", email: "stellvertreter@elternverein.today" },
        { role: t('board.roles.treasurer'), name: "Thomas Bauer", email: "kassier@elternverein.today" },
        { role: t('board.roles.secretary'), name: "Sarah Lang", email: "schriftfuehrer@elternverein.today" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('board.title')}
                description={t('board.desc')}
            />

            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl mb-4">
                    <Users size={32} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('board.title')}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('board.desc')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {members.map((m, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-primary uppercase tracking-wide">{m.role}</p>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{m.name}</h3>
                        </div>
                        <a href={`mailto:${m.email}`} className="text-gray-400 hover:text-primary transition-colors">
                            Contact
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
