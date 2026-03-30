import { Bell, Calendar, Users, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Dashboard = () => {
    const { t } = useTranslation();

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
    ];

    return (
        <div className="space-y-6">
            <SEO
                title={t('dashboard.overview.title')}
                description="Dashboard"
            />
            <div className="flex justify-between items-center px-4">
                <h1 className="text-3xl font-black text-foreground tracking-tighter">{t('dashboard.overview.title')}</h1>
                <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest">{t('dashboard.overview.welcome', { name: 'Testperson' })}</div>
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
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-card rounded-3xl border border-border shadow-2xl overflow-hidden self-start">
                    <div className="p-8 border-b border-border flex justify-between items-center bg-muted/30">
                        <h2 className="text-xl font-black text-foreground tracking-tight">{t('dashboard.overview.activity.title')}</h2>
                        <button className="text-sm font-black text-primary uppercase tracking-widest hover:opacity-80 transition-opacity">{t('dashboard.overview.activity.viewAll')}</button>
                    </div>
                    <div className="divide-y divide-border/50">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="p-6 hover:bg-primary/5 transition-colors flex justify-between items-center group">
                                <div>
                                    <p className="font-extrabold text-foreground group-hover:text-primary transition-colors">{activity.title}</p>
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">{t('dashboard.overview.activity.by')} {activity.user}</p>
                                </div>
                                <div className="text-[10px] text-foreground/20 font-mono font-black uppercase tracking-tighter bg-surface px-2 py-1 rounded-md border border-border">
                                    {activity.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Announcements */}
                <div className="bg-card rounded-3xl border border-border shadow-2xl p-8 space-y-6 self-start">
                    <h2 className="text-xl font-black text-foreground tracking-tight">{t('dashboard.overview.actions.title')}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/projekte/antrag" className="w-full text-center p-5 rounded-2xl bg-primary/10 text-primary font-black uppercase tracking-widest text-xs border border-primary/20 hover:bg-primary/20 transition-all transform hover:-translate-y-1 block">
                            {t('dashboard.overview.actions.post')}
                        </Link>
                        <button className="w-full text-center p-5 rounded-2xl bg-success/10 text-success font-black uppercase tracking-widest text-xs border border-success/20 hover:bg-success/20 transition-all transform hover:-translate-y-1">
                            {t('dashboard.overview.actions.event')}
                        </button>
                        <button className="w-full text-center p-5 rounded-2xl bg-accent/10 text-accent font-black uppercase tracking-widest text-xs border border-accent/20 hover:bg-accent/20 transition-all transform hover:-translate-y-1">
                            {t('dashboard.overview.actions.document')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
