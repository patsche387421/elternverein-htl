import { Archive, Lightbulb, ArrowRight, List, BookOpen, FlaskConical, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import SEO from '../components/SEO';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Projects = () => {
    const { t } = useTranslation();

    const currentProjects = [
        {
            title: t('projects.items.physics.title'),
            status: t('projects.items.physics.status'),
            amount: "€ 2.500",
            type: 'success',
            icon: <FlaskConical size={24} />
        },
        {
            title: t('projects.items.library.title'),
            status: t('projects.items.library.status'),
            amount: "€ 1.200",
            type: 'warning',
            icon: <BookOpen size={24} />
        },
        {
            title: t('projects.items.garden.title'),
            status: t('projects.items.garden.status'),
            amount: "€ 800",
            type: 'info',
            icon: <Sprout size={24} />
        },
    ];

    return (
        <main className="flex-grow">
            <SEO
                title={t('nav.projects')}
                description={t('projects.desc')}
                keywords="Projekte, HTL Mödling, Unterstützung, Förderung, Schulprojekte"
            />

            <div className="container mx-auto px-4 py-12 space-y-20">
                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
                        {t('projects.title')}
                    </h1>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                        {t('projects.desc')}
                    </p>
                </header>

                {/* Main Action Hub - 3 Options */}
                <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" aria-label={t('projects.overviewTable.filters.ariaLabel', 'Project Actions')}>
                    {/* 1. New Application (Primary CTA) */}
                    <Link to="/projects/apply" className="group relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-primary to-primary text-primary-foreground rounded-3xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="bg-white/20 p-5 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                            <Lightbulb size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-3 text-center">{t('projects.apply.button')}</h3>
                        <p className="text-primary-foreground/70 text-center font-medium leading-relaxed">{t('projects.apply.desc')}</p>
                    </Link>

                    {/* 2. Overview (Status) */}
                    <Link to="/projects/overview" className="group relative flex flex-col items-center justify-center p-10 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                        <div className="bg-primary/5 p-5 rounded-3xl mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                            <List size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-3 text-foreground text-center group-hover:text-primary transition-colors">{t('projects.viewOverview')}</h3>
                        <p className="text-foreground/40 text-center font-medium leading-relaxed">{t('projects.overviewTable.title')}</p>
                    </Link>

                    {/* 3. Archive */}
                    <Link to="/projects/archive" className="group relative flex flex-col items-center justify-center p-10 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
                        <div className="bg-primary/5 p-5 rounded-3xl mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                            <Archive size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-3 text-foreground text-center group-hover:text-primary transition-colors">{t('projects.viewArchive')}</h3>
                        <p className="text-foreground/40 text-center font-medium leading-relaxed">{t('projects.archiveDesc')}</p>
                    </Link>
                </nav>

                {/* Current Projects List */}
                <section className="space-y-12">
                    <div className="flex items-center gap-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                        <h2 className="text-3xl font-bold text-foreground text-center tracking-tight px-4">
                            {t('projects.currentTitle')}
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {currentProjects.map((project, index) => (
                            <article key={index} className="group flex flex-col bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 relative">
                                {/* Status Stripe */}
                                <div className={cn("h-2.5 w-full",
                                    project.status === 'In Progress' ? "bg-primary" :
                                        project.status === 'Approved' ? "bg-success" : "bg-warning"
                                )} />

                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-4 bg-background rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                                            {project.icon}
                                        </div>
                                        <span className={cn(
                                            "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm",
                                            project.status === 'In Progress' ? "bg-primary/10 text-primary" :
                                                project.status === 'Approved' ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                                        )}>
                                            {t(`projects.items.${Object.keys(t('projects.items', { returnObjects: true }))[index]}.status`)}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {t(`projects.items.${Object.keys(t('projects.items', { returnObjects: true }))[index]}.title`)}
                                    </h3>

                                    <div className="mt-auto pt-8 flex items-center text-primary font-black uppercase tracking-widest text-sm">
                                        <span className="group-hover:mr-3 transition-all duration-300">{t('home.learnMore')}</span>
                                        <ArrowRight size={18} strokeWidth={3} className="ml-2 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Projects;
