import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Upload, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProjectApplication = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

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
                    description="Ihr Projektantrag wurde erfolgreich eingereicht."
                />
                <div className="container mx-auto px-4 text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="w-24 h-24 bg-success/10 text-success rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-12">
                        <CheckCircle size={48} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('projects.apply.form.success')}</h1>
                        <p className="text-xl text-foreground/60 font-medium max-w-lg mx-auto leading-relaxed">
                            {t('projects.apply.desc')}
                        </p>
                    </div>
                    <Link to="/projects" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1">
                        <ArrowLeft size={20} strokeWidth={2.5} />
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
                    <Link to="/projects" className="group inline-flex items-center text-sm font-bold text-foreground/40 hover:text-primary transition-all uppercase tracking-widest">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
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
                <section className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

                    <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Title */}
                            <div className="space-y-3">
                                <label htmlFor="project-title" className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">
                                    {t('projects.apply.form.title')} *
                                </label>
                                <input
                                    id="project-title"
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                                    placeholder="z.B. IT-Labor Upgrade"
                                />
                            </div>

                            {/* Applicant */}
                            <div className="space-y-3">
                                <label htmlFor="applicant" className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">
                                    {t('projects.apply.form.applicant')} *
                                </label>
                                <input
                                    id="applicant"
                                    type="text"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground"
                                    placeholder="Ihr Name / Klasse"
                                />
                            </div>
                        </div>

                        {/* Costs */}
                        <div className="space-y-3">
                            <label htmlFor="costs" className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">
                                {t('projects.apply.form.costs')} *
                            </label>
                            <div className="relative">
                                <input
                                    id="costs"
                                    type="number"
                                    required
                                    min="0"
                                    step="0.01"
                                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-black text-foreground pl-12"
                                    placeholder="0.00"
                                />
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-foreground/40">€</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <label htmlFor="description" className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">
                                {t('projects.apply.form.description')} *
                            </label>
                            <textarea
                                id="description"
                                required
                                rows={6}
                                className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-foreground resize-none min-h-[160px]"
                                placeholder="Beschreiben Sie Ihr Projekt..."
                            />
                        </div>

                        {/* File Upload */}
                        <div className="space-y-3">
                            <label className="text-xs font-black text-foreground/40 uppercase tracking-widest ml-2">
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
                                    <span className="text-sm font-bold uppercase tracking-widest">Dateien hierher ziehen oder klicken</span>
                                </div>
                            </div>
                        </div>

                        <footer className="pt-8">
                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-primary/90 transition shadow-2xl shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-4 active:scale-[0.98] transform hover:-translate-y-1"
                            >
                                <Send size={24} strokeWidth={2.5} />
                                {t('projects.apply.form.submit')}
                            </button>
                        </footer>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ProjectApplication;
