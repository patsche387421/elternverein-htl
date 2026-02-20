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
        <div className="container mx-auto px-4 py-12 space-y-16">
            <SEO
                title={t('nav.projects')}
                description={t('projects.desc')}
            />

            {/* Header Section */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {t('projects.title')}
                </h1>
                <p className="text-lg text-foreground/60 leading-relaxed">
                    {t('projects.desc')}
                </p>
            </div>

            {/* Main Action Hub - 3 Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* 1. New Application (Primary CTA) */}
                <Link to="/projects/apply" className="group relative flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{t('projects.apply.button')}</h3>
                    <p className="text-primary-foreground/80 text-center text-sm">{t('projects.apply.desc')}</p>
                </Link>

                {/* 2. Overview (Status) */}
                <Link to="/projects/overview" className="group relative flex flex-col items-center justify-center p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary group-hover:bg-primary/10 transition-colors">
                        <List size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground text-center">{t('projects.viewOverview')}</h3>
                    <p className="text-foreground/60 text-center text-sm">{t('projects.overviewTable.title')}</p>
                </Link>

                {/* 3. Archive */}
                <Link to="/projects/archive" className="group relative flex flex-col items-center justify-center p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary group-hover:bg-primary/10 transition-colors">
                        <Archive size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground text-center">{t('projects.viewArchive')}</h3>
                    <p className="text-foreground/60 text-center text-sm">{t('projects.archiveDesc')}</p>
                </Link>
            </div>

            {/* Current Projects List */}
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-2xl font-bold text-foreground text-center shrink-0">
                        {t('projects.currentTitle')}
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {currentProjects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-surface rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                            {/* Status Stripe */}
                            <div className={cn("h-2 w-full",
                                project.status === 'In Progress' ? "bg-primary" :
                                    project.status === 'Approved' ? "bg-success" : "bg-warning"
                            )} />

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-background rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                                        project.status === 'In Progress' ? "bg-primary/10 text-primary" :
                                            project.status === 'Approved' ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                                    )}>
                                        {t(`projects.items.${Object.keys(t('projects.items', { returnObjects: true }))[index]}.status`)}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {t(`projects.items.${Object.keys(t('projects.items', { returnObjects: true }))[index]}.title`)}
                                </h3>

                                <div className="mt-auto pt-6 flex items-center text-primary font-bold text-sm">
                                    <span className="group-hover:mr-2 transition-all">{t('home.learnMore')}</span>
                                    <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
