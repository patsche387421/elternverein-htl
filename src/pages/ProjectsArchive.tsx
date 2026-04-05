import { useState } from 'react';
import { Archive, Folder, ChevronDown, ArrowLeft, CheckCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import SEO from '../components/SEO';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ArchivedProject {
    title: string;
    department: string;
    status: 'approved' | 'completed';
}

const archiveData: Record<string, ArchivedProject[]> = {
    '2025/26': [
        { title: 'Smartboard Austausch', department: 'IT', status: 'approved' },
        { title: '3D-Drucker Filament', department: 'IT', status: 'completed' },
        { title: 'Bibliotheks-Lounge Sitzmöbel', department: 'GEN', status: 'approved' },
    ],
    '2024/25': [
        { title: 'Robotik-AG Starterset', department: 'ET', status: 'completed' },
        { title: 'Chemie-Labor Glaswaren', department: 'GEN', status: 'completed' },
        { title: 'Exkursion Wien Technikmuseum', department: 'ME', status: 'completed' },
        { title: 'Sportgeräte Turnhalle', department: 'SP', status: 'completed' },
    ],
    '2023/24': [
        { title: 'CNC-Fräse Wartung', department: 'ME', status: 'completed' },
        { title: 'Schülerzeitung Druckkosten', department: 'GEN', status: 'completed' },
        { title: 'Erste-Hilfe-Kurs Material', department: 'GEN', status: 'completed' },
    ],
    '2022/23': [
        { title: 'Laptopwagen Klassenzimmer', department: 'IT', status: 'completed' },
        { title: 'Barbarafeier Bautechnik', department: 'BAU', status: 'completed' },
        { title: 'Volleyball-Netz & Bälle', department: 'SP', status: 'completed' },
    ],
    '2021/22': [
        { title: 'Lötstation Elektronik', department: 'ET', status: 'completed' },
        { title: 'Nachhilfe-Plattform Lizenz', department: 'GEN', status: 'completed' },
        { title: 'Matura-Feier Zuschuss', department: 'GEN', status: 'completed' },
    ],
    '2020/21': [
        { title: 'Webcams für Distance Learning', department: 'IT', status: 'completed' },
        { title: 'Desinfektionsmittel & Masken', department: 'GEN', status: 'completed' },
        { title: 'Online-Nachhilfe Pilotprojekt', department: 'GEN', status: 'completed' },
        { title: 'Schulgarten Phase 1', department: 'BAU', status: 'completed' },
    ],
};

const ProjectsArchive = () => {
    const { t } = useTranslation();
    const [expandedYear, setExpandedYear] = useState<string | null>(null);

    const years = Object.keys(archiveData);

    const toggleYear = (year: string) => {
        setExpandedYear(prev => prev === year ? null : year);
    };

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
                    <Link to="/projekte" className="group inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        {t('projects.backToCurrent')}
                    </Link>

                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-2xl mb-4 shadow-inner transform -rotate-3 hover:rotate-0 transition-transform duration-500">
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
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" aria-label={t('projects.archive.ariaLabel', 'Archive Years')}>
                    {years.map((year) => {
                        const isExpanded = expandedYear === year;
                        const projects = archiveData[year];

                        return (
                            <article
                                key={year}
                                className={cn(
                                    "bg-card rounded-3xl border cursor-pointer group transition-all duration-500 shadow-xl relative overflow-hidden",
                                    isExpanded
                                        ? "border-primary/50 shadow-2xl shadow-primary/10 sm:col-span-2 lg:col-span-3"
                                        : "border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl"
                                )}
                            >
                                {/* Card Header — always visible */}
                                <button
                                    onClick={() => toggleYear(year)}
                                    className="w-full p-10 text-left flex items-center justify-between gap-4 relative z-10"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "p-4 rounded-2xl shadow-inner transition-all duration-500",
                                            isExpanded
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-background text-foreground/20 group-hover:text-primary"
                                        )}>
                                            <Folder size={32} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className={cn(
                                                "text-2xl font-black mb-1 transition-colors",
                                                isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"
                                            )}>
                                                {t('projects.year')} {year}
                                            </h3>
                                            <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground/60 transition-colors">
                                                {projects.length} {t('projects.fundedProjects')}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        size={24}
                                        strokeWidth={2.5}
                                        className={cn(
                                            "text-foreground/30 transition-transform duration-300 flex-shrink-0",
                                            isExpanded ? "rotate-180 text-primary" : "group-hover:text-primary"
                                        )}
                                    />
                                </button>

                                {/* Expanded content */}
                                {isExpanded && (
                                    <div className="px-10 pb-10 animate-in fade-in slide-in-from-top-4 duration-300">
                                        <div className="border-t border-border pt-6 space-y-3">
                                            {projects.map((project, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between gap-4 p-4 bg-background rounded-2xl border border-border hover:border-primary/20 transition-colors group/item"
                                                >
                                                    <div className="flex items-center gap-4 min-w-0">
                                                        <div className="text-primary/60 group-hover/item:text-primary transition-colors flex-shrink-0">
                                                            {project.status === 'completed'
                                                                ? <CheckCircle size={18} strokeWidth={2.5} />
                                                                : <Clock size={18} strokeWidth={2.5} />
                                                            }
                                                        </div>
                                                        <span className="font-bold text-foreground truncate">{project.title}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                        <span className="px-3 py-1 rounded-lg bg-surface border border-border text-[10px] font-black uppercase tracking-widest text-foreground/50">
                                                            {t(`projects.overviewTable.departments.${project.department}`, project.department)}
                                                        </span>
                                                        <span className={cn(
                                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm",
                                                            project.status === 'completed'
                                                                ? "bg-success/10 text-success border-success/20"
                                                                : "bg-accent/10 text-accent border-accent/20"
                                                        )}>
                                                            {project.status === 'completed'
                                                                ? t('projects.overviewTable.status.approved', 'Abgeschlossen')
                                                                : t('projects.overviewTable.status.pending', 'Offen')
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Decorative blob */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                            </article>
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default ProjectsArchive;
