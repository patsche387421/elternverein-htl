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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-success/10 text-success uppercase tracking-wide">
                        <CheckCircle size={14} />
                        {t('projects.overviewTable.status.approved')}
                    </span>
                );
            case 'rejected':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-destructive/10 text-destructive uppercase tracking-wide">
                        <XCircle size={14} />
                        {t('projects.overviewTable.status.rejected')}
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-warning/10 text-warning uppercase tracking-wide">
                        <Clock size={14} />
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
        <div className="container mx-auto px-4 py-12 space-y-8">
            <SEO
                title={t('projects.overview')}
                description={t('projects.overviewTable.title')}
            />

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-4">
                    <Link to="/projects" className="inline-flex items-center text-sm text-foreground/60 hover:text-primary transition-colors">
                        <ArrowLeft size={16} className="mr-1" />
                        {t('projects.backToCurrent')}
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('projects.overviewTable.title')}
                    </h1>
                </div>
            </div>

            {/* Search/Filter Bar */}
            <div className="bg-surface p-4 rounded-2xl border border-border flex flex-wrap items-center gap-4">
                <div className="relative flex-1 min-w-[200px] max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                    <input
                        type="text"
                        placeholder={t('projects.overviewTable.filters.search')}
                        className="w-full pl-10 pr-4 py-2 bg-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="px-4 py-2 bg-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-foreground/80 outline-none appearance-none"
                    >
                        <option value="all">{t('projects.overviewTable.filters.allDepts')}</option>
                        <option value="IT">{t('projects.overviewTable.departments.IT')}</option>
                        <option value="SP">{t('projects.overviewTable.departments.SP')}</option>
                        <option value="FIN">{t('projects.overviewTable.departments.FIN')}</option>
                        <option value="ET">{t('projects.overviewTable.departments.ET')}</option>
                        <option value="GEN">{t('projects.overviewTable.departments.GEN')}</option>
                    </select>

                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-2 bg-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-foreground/80 outline-none appearance-none"
                    >
                        <option value="all">{t('projects.overviewTable.filters.allStatus')}</option>
                        <option value="approved">{t('projects.overviewTable.status.approved')}</option>
                        <option value="pending">{t('projects.overviewTable.status.pending')}</option>
                        <option value="rejected">{t('projects.overviewTable.status.rejected')}</option>
                    </select>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-surface rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-background/50 border-b border-border">
                            <tr>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.project')}</th>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.department')}</th>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.applicant')}</th>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.date')}</th>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.cost')}</th>
                                <th className="p-6 text-sm font-bold text-foreground/70 uppercase tracking-wider">{t('projects.overviewTable.headers.status')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredProjects.map((p, i) => (
                                <tr key={i} className="group hover:bg-background/50 transition-colors">
                                    <td className="p-6 font-bold text-foreground">{p.title}</td>
                                    <td className="p-6 text-foreground/80">
                                        <span className="px-2 py-1 rounded-md bg-foreground/5 text-xs font-medium">
                                            {t(`projects.overviewTable.departments.${p.department}`)}
                                        </span>
                                    </td>
                                    <td className="p-6 text-foreground/80">{p.applicant}</td>
                                    <td className="p-6 text-foreground/60 font-mono text-sm">{p.date}</td>
                                    <td className="p-6 font-mono font-medium">{p.cost}</td>
                                    <td className="p-6">{getStatusBadge(p.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-center pt-8">
                <Link to="/projects/apply" className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:underline">
                    {t('projects.apply.button')}
                    <ArrowLeft size={16} className="rotate-180" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectOverview;
