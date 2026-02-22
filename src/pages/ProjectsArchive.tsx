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
        <main className="flex-grow">
            <SEO
                title={`${t('projects.title')} - Archive`}
                description={t('projects.archiveDesc')}
                keywords="Projektarchiv, Förderungen, Archiv, HTL Mödling, Elternverein"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                {/* Header */}
                <header className="space-y-8">
                    <Link to="/projects" className="group inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        {t('projects.backToCurrent')}
                    </Link>

                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-[2rem] mb-4 shadow-inner transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Archive size={40} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
                            {t('projects.viewArchive')}
                        </h1>
                        <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                            {t('projects.archiveDesc')}
                        </p>
                    </div>
                </header>

                {/* Archive Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" aria-label="Archive Years">
                    {years.map((year) => (
                        <article key={year} className="bg-card p-10 rounded-[2.5rem] border border-border hover:border-primary/50 cursor-pointer group transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="p-4 bg-background rounded-2xl text-foreground/20 group-hover:text-primary transition-all duration-500 shadow-inner">
                                    <Folder size={32} strokeWidth={2.5} />
                                </div>
                                <ExternalLink size={20} strokeWidth={3} className="text-foreground/20 group-hover:text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{t('projects.year')} {year}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground/60 transition-colors">{t('projects.fundedProjects')}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default ProjectsArchive;
