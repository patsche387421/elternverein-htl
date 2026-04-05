import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Upload, ArrowLeft, CheckCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProjectApplication = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const projects = [
        { title: "Smartboard Austausch", applicant: "Prof. Bauer / IT", department: "IT", date: "15.02.2026", cost: "€ 4.200", status: "pending" },
        { title: "3D-Drucker Filament", applicant: "Robotik-Club", department: "IT", date: "10.02.2026", cost: "€ 350", status: "approved" },
        { title: "Bibliotheks-Lounge Sitzmöbel", applicant: "Schülervertretung", department: "GEN", date: "05.02.2026", cost: "€ 1.800", status: "approved" },
    ];

    const filteredProjects = projects.filter(p => {
        const matchesDept = selectedDepartment === 'all' || p.department === selectedDepartment;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.applicant.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDept && matchesSearch;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-success/10 text-success uppercase tracking-widest border border-success/20 shadow-sm">
                        {t('projects.overviewTable.status.approved')}
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-accent/10 text-accent uppercase tracking-widest border border-accent/20 shadow-sm">
                        {t('projects.overviewTable.status.pending')}
                    </span>
                );
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mimic API call
        setTimeout(() => setSubmitted(true), 1000);
    };

    if (submitted) {
        return (
            <main className="flex-grow flex items-center justify-center py-24">
                <SEO
                    title={`${t('projects.apply.title')} - ${t('projects.apply.form.success')}`}
                    description={t('projects.apply.form.successSEO')}
                />
                <div className="container mx-auto px-4 text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="w-24 h-24 bg-success/10 text-success rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-12">
                        <CheckCircle size={48} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('projects.apply.form.success')}</h1>
                        <p className="text-xl text-foreground/60 font-medium max-w-lg mx-auto leading-relaxed">
                            {t('projects.apply.desc')}
                        </p>
                    </div>
                    <Link to="/projekte" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1">
                        <ArrowLeft size={20} strokeWidth={2.5} className="rtl:rotate-180" />
                        {t('projects.backToCurrent')}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-grow">
            <SEO
                title={t('projects.apply.title')}
                description={t('projects.apply.desc')}
                keywords="Projektantrag, Förderung, Antrag, Elternverein, HTL Mödling"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                {/* Header */}
                <header className="max-w-4xl mx-auto space-y-8">
                    <Link to="/projekte" className="group inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest">
                        <ArrowLeft size={16} className="me-2 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform rtl:rotate-180" strokeWidth={2.5} />
                        {t('projects.backToCurrent')}
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">{t('projects.apply.title')}</h1>
                        <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                            {t('projects.apply.desc')}
                        </p>
                    </div>
                </header>

                {/* Form Card */}
                <section className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 start-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

                    <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Title */}
                            <div className="space-y-3">
                                <label htmlFor="project-title" className="text-xs font-black text-foreground/40 uppercase tracking-widest ms-2">
                                    {t('projects.apply.form.title')} *
                                </label>
                                <input
                                    id="project-title"
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                                    placeholder={t('projects.apply.form.titlePlaceholder')}
                                />
                            </div>

                            {/* Applicant */}
                            <div className="space-y-3">
                                <label htmlFor="applicant" className="text-xs font-black text-foreground/40 uppercase tracking-widest ms-2">
                                    {t('projects.apply.form.applicant')} *
                                </label>
                                <input
                                    id="applicant"
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                                    placeholder={t('projects.apply.form.applicantPlaceholder')}
                                />
                            </div>
                        </div>

                        {/* Costs */}
                        <div className="space-y-3">
                            <label htmlFor="costs" className="text-xs font-black text-foreground/40 uppercase tracking-widest ms-2">
                                {t('projects.apply.form.costs')} *
                            </label>
                            <div className="relative">
                                <input
                                    id="costs"
                                    type="number"
                                    required
                                    min="0"
                                    step="0.01"
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-black text-foreground ps-12"
                                    placeholder={t('projects.apply.form.placeholderCosts', '0.00')}
                                />
                                <span className="absolute start-6 top-1/2 -translate-y-1/2 font-black text-foreground/40">€</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <label htmlFor="description" className="text-xs font-black text-foreground/40 uppercase tracking-widest ms-2">
                                {t('projects.apply.form.description')} *
                            </label>
                            <textarea
                                id="description"
                                required
                                rows={6}
                                className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground resize-none min-h-[160px]"
                                placeholder={t('projects.apply.form.descriptionPlaceholder')}
                            />
                        </div>

                        {/* File Upload */}
                        <div className="space-y-3">
                            <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ms-2">
                                {t('projects.apply.form.files')}
                            </label>
                            <div className="border-2 border-dashed border-border rounded-2xl p-12 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer text-center relative group shadow-inner">
                                <input
                                    type="file"
                                    multiple
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="flex flex-col items-center gap-4 text-foreground/30 group-hover:text-primary transition-all duration-300">
                                    <div className="p-4 bg-surface rounded-2xl shadow-sm transform group-hover:scale-110 transition-transform">
                                        <Upload size={32} strokeWidth={2.5} />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest">{t('projects.apply.form.uploadText')}</span>
                                </div>
                            </div>
                        </div>

                        <footer className="pt-8">
                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-primary/90 transition shadow-2xl shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-4 active:scale-[0.98] transform hover:-translate-y-1"
                            >
                                <Send size={24} strokeWidth={2.5} className="rtl:rotate-180" />
                                {t('projects.apply.form.submit')}
                            </button>
                        </footer>
                    </form>
                </section>

                {/* Dashboard: Submitted Applications Section */}
                <section className="max-w-6xl mx-auto space-y-10 pt-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black tracking-tight text-foreground">
                                {t('projects.apply.dashboardTitle')}
                            </h2>
                            <p className="text-foreground/40 font-medium">{t('projects.apply.dashboardDesc')}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            {/* Search */}
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute start-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('projects.overviewTable.filters.search')}
                                    className="w-full ps-12 pe-4 py-3 bg-surface border border-border rounded-xl text-sm font-medium focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                />
                            </div>

                            {/* Dept Dropdown */}
                            <select
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                                className="w-full sm:w-auto px-4 py-3 bg-surface border border-border rounded-xl text-sm font-bold text-foreground focus:ring-4 focus:ring-primary/10 transition-all outline-none cursor-pointer"
                            >
                                <option value="all">{t('projects.overviewTable.filters.allDepts')}</option>
                                {['IT', 'ME', 'ET', 'BAU', 'EL', 'CH', 'GEN', 'SP', 'FIN'].map(dept => (
                                    <option key={dept} value={dept}>
                                        {t(`projects.overviewTable.departments.${dept}`)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-start border-collapse">
                                <thead>
                                    <tr className="bg-muted/30 border-b border-border">
                                        <th className="p-6 text-[10px] font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.project')}</th>
                                        <th className="p-6 text-[10px] font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.department')}</th>
                                        <th className="p-6 text-[10px] font-black text-foreground/40 uppercase tracking-widest">{t('projects.overviewTable.headers.status')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {filteredProjects.length > 0 ? (
                                        filteredProjects.map((p, i) => (
                                            <tr key={i} className="group hover:bg-primary/5 transition-colors">
                                                <td className="p-6">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="font-extrabold text-foreground tracking-tight">{p.title}</div>
                                                        <div className="text-xs text-foreground/40">{p.applicant}</div>
                                                    </div>
                                                </td>
                                                <td className="p-6 text-xs font-bold text-foreground/60">
                                                    {t(`projects.overviewTable.departments.${p.department}`)}
                                                </td>
                                                <td className="p-6">
                                                    {getStatusBadge(p.status)}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className="p-12 text-center text-foreground/20 font-bold italic">
                                                {t('projects.overviewTable.noResults')}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProjectApplication;
