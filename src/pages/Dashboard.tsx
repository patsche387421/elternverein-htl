import { useState } from 'react';
import { Bell, Calendar, Users, FileText, Info, X, Upload, FileEdit } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dashboard = () => {
    const { t } = useTranslation();
    const [toast, setToast] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [showNewsModal, setShowNewsModal] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);

    const showToast = (message: string) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    const stats = [
        { name: t('dashboard.overview.stats.events'), value: '3', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
        { name: t('dashboard.overview.stats.messages'), value: '12', icon: Bell, color: 'text-warning', bg: 'bg-warning/10' },
        { name: t('dashboard.overview.stats.members'), value: '248', icon: Users, color: 'text-success', bg: 'bg-success/10' },
        { name: t('dashboard.overview.stats.reports'), value: '5', icon: FileText, color: 'text-accent', bg: 'bg-accent/10' },
    ];

    const recentActivity = [
        { title: t('dashboard.overview.mock.a1'), date: t('dashboard.overview.mock.d1'), user: t('dashboard.overview.mock.u1') },
        { title: t('dashboard.overview.mock.a2'), date: t('dashboard.overview.mock.d2'), user: t('dashboard.overview.mock.u2') },
        { title: t('dashboard.overview.mock.a3'), date: t('dashboard.overview.mock.d3'), user: t('dashboard.overview.mock.u3') },
        { title: t('dashboard.overview.mock.a4'), date: t('dashboard.overview.mock.d4'), user: t('dashboard.overview.mock.u4') },
        { title: t('dashboard.overview.mock.a5'), date: t('dashboard.overview.mock.d5'), user: t('dashboard.overview.mock.u5') },
        { title: t('dashboard.overview.mock.a6', 'Zusätzlicher Test-Eintrag 1'), date: t('dashboard.overview.mock.d6', 'Heute'), user: 'System' },
        { title: t('dashboard.overview.mock.a7', 'Zusätzlicher Test-Eintrag 2'), date: t('dashboard.overview.mock.d7', 'Gestern'), user: 'System' },
    ];

    const visibleActivity = showAll ? recentActivity : recentActivity.slice(0, 4);

    return (
        <div className="space-y-6 relative">
            <SEO
                title={t('dashboard.overview.title')}
                description="Dashboard"
            />
            <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between gap-2 md:gap-4 px-4">
                <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter">{t('dashboard.overview.title')}</h1>
                <div className="text-xs md:text-sm font-bold text-foreground/40 uppercase tracking-widest">{t('dashboard.overview.welcome', { name: 'Testperson' })}</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-card p-6 rounded-2xl border border-border shadow-xl flex items-center gap-4 group hover:scale-[1.02] transition-all">
                        <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <p className="text-xs font-black text-foreground/40 uppercase tracking-widest mb-1">{stat.name}</p>
                            <h3 className="text-2xl font-black text-foreground">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                {/* Quick Actions */}
                <div className="order-first lg:order-last bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 space-y-6 self-start">
                    <h2 className="text-xl font-black text-foreground tracking-tight">{t('dashboard.overview.actions.title')}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/projekte/antrag" className="w-full text-center p-4 md:p-5 rounded-2xl bg-primary/10 text-primary font-black uppercase tracking-widest text-xs border border-primary/20 hover:bg-primary/20 transition-all transform hover:-translate-y-1 block">
                            {t('dashboard.overview.actions.post')}
                        </Link>
                        <button
                            onClick={() => setShowNewsModal(true)}
                            className="w-full text-center p-4 md:p-5 rounded-2xl bg-success/10 text-success font-black uppercase tracking-widest text-xs border border-success/20 hover:bg-success/20 transition-all transform hover:-translate-y-1"
                        >
                            {t('dashboard.overview.actions.event')}
                        </button>
                        <button
                            onClick={() => setShowUploadModal(true)}
                            className="w-full text-center p-4 md:p-5 rounded-2xl bg-accent/10 text-accent font-black uppercase tracking-widest text-xs border border-accent/20 hover:bg-accent/20 transition-all transform hover:-translate-y-1"
                        >
                            {t('dashboard.overview.actions.document')}
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div id="activity-list" className="order-last lg:order-first lg:col-span-2 bg-card rounded-3xl border border-border shadow-2xl overflow-hidden self-start">
                    <div className="p-6 md:p-8 border-b border-border flex justify-between items-center bg-muted/30">
                        <h2 className="text-xl font-black text-foreground tracking-tight">{t('dashboard.overview.activity.title')}</h2>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm font-black text-primary uppercase tracking-widest hover:opacity-80 transition-opacity"
                        >
                            {showAll ? t('dashboard.overview.activity.less') : t('dashboard.overview.activity.viewAll')}
                        </button>
                    </div>
                    <div className="divide-y divide-border/50">
                        {visibleActivity.map((activity, i) => (
                            <div key={i} className="p-4 md:p-6 hover:bg-primary/5 transition-colors flex justify-between items-center group gap-4">
                                <div className="min-w-0">
                                    <p className="font-extrabold text-foreground group-hover:text-primary transition-colors truncate">{activity.title}</p>
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">{t('dashboard.overview.activity.by')} {activity.user}</p>
                                </div>
                                <div className="text-[10px] text-foreground/20 font-mono font-black uppercase tracking-tighter bg-surface px-2 py-1 rounded-md border border-border whitespace-nowrap shrink-0">
                                    {activity.date}
                                </div>
                            </div>
                        ))}
                    </div>
                    {recentActivity.length > 4 && (
                        <div className="p-4 border-t border-border text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-xs font-black text-foreground/40 hover:text-primary uppercase tracking-widest transition-colors"
                            >
                                {showAll 
                                    ? `▲ ${t('dashboard.overview.activity.showLess')}` 
                                    : `▼ ${t('dashboard.overview.activity.showMore', { count: recentActivity.length - 4 })}`
                                }
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ── News Modal ── */}
            {showNewsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowNewsModal(false)} />
                    <div className="relative z-10 w-full max-w-lg bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <div className="bg-success p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FileEdit size={22} className="text-white" />
                                <h2 className="text-xl font-black text-white">{t('dashboard.overview.actions.newsTitle')}</h2>
                            </div>
                            <button onClick={() => setShowNewsModal(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setShowNewsModal(false); showToast(t('dashboard.overview.actions.newsSuccess')); }}>
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">{t('dashboard.calendar.form.title').replace(' *', '')}</label>
                                <input type="text" placeholder={t('dashboard.overview.actions.newsPlaceholderTitle')} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">{t('dashboard.overview.actions.category')}</label>
                                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary outline-none transition-all">
                                    <option>{t('dashboard.overview.actions.event')}</option>
                                    <option>{t('newsArticle.category')}</option>
                                    <option>{t('dashboard.overview.actions.document')}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">{t('dashboard.calendar.form.description')}</label>
                                <textarea rows={4} placeholder={t('dashboard.overview.actions.newsPlaceholderContent')} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setShowNewsModal(false)} className="flex-1 py-3 rounded-xl border border-border font-bold text-foreground/60 hover:bg-muted transition-all text-sm">
                                    {t('dashboard.overview.actions.cancel')}
                                </button>
                                <button type="submit" className="flex-1 py-3 rounded-xl bg-success text-white font-black uppercase tracking-widest text-sm hover:bg-success/90 transition-all">
                                    {t('dashboard.overview.actions.publish')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Upload Modal ── */}
            {showUploadModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowUploadModal(false)} />
                    <div className="relative z-10 w-full max-w-md bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <div className="bg-accent p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Upload size={22} className="text-white" />
                                <h2 className="text-xl font-black text-white">{t('dashboard.overview.actions.uploadTitle')}</h2>
                            </div>
                            <button onClick={() => setShowUploadModal(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                                <Upload size={40} className="mx-auto text-foreground/20 group-hover:text-primary/50 transition-colors mb-4" />
                                <p className="text-sm font-bold text-foreground/50 group-hover:text-foreground/70 transition-colors">{t('dashboard.overview.actions.uploadPlaceholderFile')}</p>
                                <p className="text-[10px] text-foreground/30 font-black uppercase tracking-widest mt-2">{t('dashboard.overview.actions.uploadHint')}</p>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">{t('dashboard.overview.actions.uploadDate')}</label>
                                <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button onClick={() => setShowUploadModal(false)} className="flex-1 py-3 rounded-xl border border-border font-bold text-foreground/60 hover:bg-muted transition-all text-sm">
                                    {t('dashboard.overview.actions.cancel')}
                                </button>
                                <button
                                    onClick={() => { setShowUploadModal(false); showToast(t('dashboard.overview.actions.uploadSuccess')); }}
                                    className="flex-1 py-3 rounded-xl bg-accent text-white font-black uppercase tracking-widest text-sm hover:bg-accent/90 transition-all"
                                >
                                    {t('dashboard.overview.actions.uploadBtn')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-6 py-4 shadow-2xl">
                        <Info size={20} className="text-primary flex-shrink-0" />
                        <p className="text-sm font-bold text-foreground">{toast}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
