import { useState } from 'react';
import { ArrowLeft, CheckCircle, Clock, XCircle, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProjectOverview = () => {
    const { t } = useTranslation();
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const projects = [
        { title: "Smartboard Austausch", applicant: "Prof. Bauer / IT", department: "IT", date: "15.02.2026", cost: "€ 4.200", status: "pending" },
        { title: "3D-Drucker Filament", applicant: "Robotik-Club", department: "IT", date: "10.02.2026", cost: "€ 350", status: "approved" },
        { title: "Bibliotheks-Lounge Sitzmöbel", applicant: "Schülervertretung", department: "GEN", date: "05.02.2026", cost: "€ 1.800", status: "approved" },
        { title: "Gymnastikmatten", applicant: "Sportabteilung", department: "SP", date: "28.01.2026", cost: "€ 2.500", status: "rejected" },
        { title: "Chemie-Labor Glaswaren", applicant: "Prof. Weber", department: "GEN", date: "20.01.2026", cost: "€ 900", status: "approved" },
        { title: "Exkursionsbus Zuschuss", applicant: "3AHIT", department: "IT", date: "15.01.2026", cost: "€ 400", status: "approved" },
        { title: "Arduino Bausätze", applicant: "Abteilung Elektronik", department: "ET", date: "10.01.2026", cost: "€ 1.200", status: "pending" },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-success/10 text-success uppercase tracking-widest border border-success/20 shadow-sm">
                        <CheckCircle size={12} strokeWidth={3} />
                        {t('projects.overviewTable.status.approved')}
                    </span>
                );
            case 'rejected':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-destructive/10 text-destructive uppercase tracking-widest border border-destructive/20 shadow-sm">
                        <XCircle size={12} strokeWidth={3} />
                        {t('projects.overviewTable.status.rejected')}
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-warning/10 text-warning uppercase tracking-widest border border-warning/20 shadow-sm">
                        <Clock size={12} strokeWidth={3} />
                        {t('projects.overviewTable.status.pending')}
                    </span>
                );
        }
    };

    const filteredProjects = projects.filter(p => {
        const matchesDept = selectedDepartment === 'all' || p.department === selectedDepartment;
        const matchesStatus = selectedStatus === 'all' || p.status === selectedStatus;
        return matchesDept && matchesStatus;
    });

    return (
        <main className="flex-grow">
            <SEO
                title={t('projects.overview')}
                description={t('projects.overviewTable.title')}
                keywords="Projektübersicht, Status, Förderung, HTL Mödling, Elternverein"
            />

            <div className="container mx-auto px-4 py-12 space-y-12">
                {/* Header */}
                <header className="space-y-6">
                    <Link to="/projects" className="group inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        {t('projects.backToCurrent')}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                        {t('projects.overviewTable.title')}
                    </h1>
                </header>

                {/* Search Bar */}
                <section className="max-w-6xl mx-auto space-y-6">
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30" size={24} />
                        <input
                            type="text"
                            placeholder={t('projects.overviewTable.filters.search')}
                            className="w-full pl-16 pr-6 py-6 bg-card rounded-[2rem] border border-border shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-semibold text-xl text-foreground outline-none"
                        />
                    </div>

                    {/* Filter Tags - Scrollable on Mobile */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 flex-nowrap">
                            <button
                                onClick={() => setSelectedStatus('all')}
                                className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest border transition-all ${selectedStatus === 'all'
                                        ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                                        : 'bg-surface/50 text-foreground/40 border-border hover:border-primary/50'
                                    }`}
                            >
                                {t('projects.overviewTable.filters.allStatus')}
                            </button>
                            {['pending', 'approved', 'rejected'].map(status => (
                                <button
                                    key={status}
                                    onClick={() => setSelectedStatus(status)}
                                    className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest border transition-all ${selectedStatus === status
                                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                                            : 'bg-surface/50 text-foreground/40 border-border hover:border-primary/50'
                                        }`}
                                >
                                    {t(`projects.overviewTable.status.${status}`)}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 flex-nowrap">
                            <button
                                onClick={() => setSelectedDepartment('all')}
                                className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest border transition-all ${selectedDepartment === 'all'
                                        ? 'bg-primary/20 text-primary border-primary/30'
                                        : 'bg-surface/50 text-foreground/40 border-border hover:border-primary/50'
                                    }`}
                            >
                                {t('projects.overviewTable.filters.allDepts')}
                            </button>
                            {['IT', 'ME', 'ET', 'BAU', 'SP', 'GEN'].map(dept => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDepartment(dept)}
                                    className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest border transition-all ${selectedDepartment === dept
                                            ? 'bg-primary/20 text-primary border-primary/30'
                                            : 'bg-surface/50 text-foreground/40 border-border hover:border-primary/50'
                                        }`}
                                >
                                    {t(`projects.overviewTable.departments.${dept}`)}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Table Container */}
                <section className="bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-muted/50 border-b border-border">
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.project')}</th>
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.department')}</th>
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.applicant')}</th>
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.date')}</th>
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.cost')}</th>
                                    <th className="p-8 text-xs font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.status')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {filteredProjects.map((p, i) => (
                                    <tr key={i} className="group hover:bg-primary/5 transition-all duration-300">
                                        <td className="p-8 font-extrabold text-foreground tracking-tight">{p.title}</td>
                                        <td className="p-8">
                                            <span className="px-3 py-1 rounded-lg bg-surface border border-border text-[10px] font-black uppercase tracking-widest text-foreground/60 shadow-inner group-hover:border-primary/20 group-hover:text-primary transition-all">
                                                {t(`projects.overviewTable.departments.${p.department}`)}
                                            </span>
                                        </td>
                                        <td className="p-8 text-foreground/70 font-medium">{p.applicant}</td>
                                        <td className="p-8 text-foreground/40 font-mono text-xs">{p.date}</td>
                                        <td className="p-8 font-mono font-black text-foreground/80">{p.cost}</td>
                                        <td className="p-8">{getStatusBadge(p.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className="text-center pt-12">
                    <Link to="/projects/apply" className="group inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1">
                        {t('projects.apply.button')}
                        <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Link>
                </footer>
            </div>
        </main>
    );
};

export default ProjectOverview;
