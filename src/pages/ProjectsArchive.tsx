import { Archive, Folder, ExternalLink, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProjectsArchive = () => {
    const { t } = useTranslation();

    const years = [
        "2025/26", "2024/25", "2023/24", "2022/23", "2021/22", "2020/21"
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={`${t('projects.title')} - Archive`}
                description={t('projects.desc')}
            />

            <div className="flex items-center gap-4">
                <Link to="/projects" className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                    <ArrowLeft size={20} className="text-gray-700 dark:text-gray-300" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('projects.backToCurrent')}</h1>
            </div>

            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-2xl mb-4">
                    <Archive size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t('projects.archive')}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('projects.archiveDesc')}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {years.map((year) => (
                    <div key={year} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 cursor-pointer group transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <Folder size={24} className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
                            <ExternalLink size={16} className="text-gray-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('projects.year')} {year}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('projects.fundedProjects')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsArchive;
