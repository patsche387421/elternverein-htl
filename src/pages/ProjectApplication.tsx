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
            <div className="container mx-auto px-4 py-24 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('projects.apply.form.success')}</h2>
                <p className="text-foreground/70 max-w-lg mx-auto">
                    {t('contact.desc')}
                </p>
                <Link to="/projects" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors mt-8">
                    {t('projects.backToCurrent')}
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <SEO
                title={t('projects.apply.title')}
                description={t('projects.apply.desc')}
            />

            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-6">
                <Link to="/projects" className="inline-flex items-center text-sm text-foreground/60 hover:text-primary transition-colors">
                    <ArrowLeft size={16} className="mr-1" />
                    {t('projects.backToCurrent')}
                </Link>

                <h1 className="text-4xl font-bold text-foreground">{t('projects.apply.title')}</h1>
                <p className="text-xl text-foreground/70">
                    {t('projects.apply.desc')}
                </p>
            </div>

            {/* Form Card */}
            <div className="max-w-3xl mx-auto bg-surface p-8 rounded-3xl border border-border shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 font-bold block">
                            {t('projects.apply.form.title')} *
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none transition-all text-foreground"
                            placeholder="e.g. New Physics Lab Equipment"
                        />
                    </div>

                    {/* Applicant */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 font-bold block">
                            {t('projects.apply.form.applicant')} *
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none transition-all text-foreground"
                            placeholder="Max Mustermann / 4AHIT"
                        />
                    </div>

                    {/* Costs */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 font-bold block">
                            {t('projects.apply.form.costs')} *
                        </label>
                        <input
                            type="number"
                            required
                            min="0"
                            step="0.01"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none transition-all text-foreground"
                            placeholder="0.00"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 font-bold block">
                            {t('projects.apply.form.description')} *
                        </label>
                        <textarea
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-ring outline-none transition-all text-foreground resize-y min-h-[120px]"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80 font-bold block">
                            {t('projects.apply.form.files')}
                        </label>
                        <div className="border-2 border-dashed border-border rounded-xl p-8 hover:bg-background/50 transition-colors cursor-pointer text-center relative group">
                            <input
                                type="file"
                                multiple
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center gap-3 text-foreground/50 group-hover:text-primary transition-colors">
                                <Upload size={32} />
                                <span className="text-sm font-medium">Drag & drop files here or click to upload</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                        >
                            <Send size={20} />
                            {t('projects.apply.form.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectApplication;
