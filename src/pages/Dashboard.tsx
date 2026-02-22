import { Bell, Calendar, Users, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const Dashboard = () => {
    const stats = [
        { name: 'Upcoming Events', value: '3', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
        { name: 'New Messages', value: '12', icon: Bell, color: 'text-warning', bg: 'bg-warning/10' },
        { name: 'Total Members', value: '248', icon: Users, color: 'text-success', bg: 'bg-success/10' },
        { name: 'Recent Reports', value: '5', icon: FileText, color: 'text-accent', bg: 'bg-accent/10' },
    ];

    const recentActivity = [
        { title: 'New meeting minutes uploaded', date: '2 hours ago', user: 'Admin' },
        { title: 'Summer Festival budget approved', date: 'Yesterday', user: 'Treasurer' },
        { title: 'New parent registration: John Smith', date: '2 days ago', user: 'System' },
    ];

    return (
        <div className="space-y-6">
            <SEO
                title="Dashboard"
                description="Verwalten Sie Ihre Profil- und Vereinsaktivitäten."
            />
            <div className="flex justify-between items-center px-4">
                <h1 className="text-3xl font-black text-foreground tracking-tighter">Dashboard Overview</h1>
                <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Welcome back, Patrick</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-card p-6 rounded-[2rem] border border-border shadow-xl flex items-center gap-4 group hover:scale-[1.02] transition-all">
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
                <div className="lg:col-span-2 bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden self-start">
                    <div className="p-8 border-b border-border flex justify-between items-center bg-muted/30">
                        <h2 className="text-xl font-black text-foreground tracking-tight">Recent Activity</h2>
                        <button className="text-sm font-black text-primary uppercase tracking-widest hover:opacity-80 transition-opacity">View All</button>
                    </div>
                    <div className="divide-y divide-border/50">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="p-6 hover:bg-primary/5 transition-colors flex justify-between items-center group">
                                <div>
                                    <p className="font-extrabold text-foreground group-hover:text-primary transition-colors">{activity.title}</p>
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">by {activity.user}</p>
                                </div>
                                <div className="text-[10px] text-foreground/20 font-mono font-black uppercase tracking-tighter bg-surface px-2 py-1 rounded-md border border-border">
                                    {activity.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Announcements */}
                <div className="bg-card rounded-[2.5rem] border border-border shadow-2xl p-8 space-y-6 self-start">
                    <h2 className="text-xl font-black text-foreground tracking-tight">Quick Actions</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <button className="w-full text-left p-5 rounded-2xl bg-primary/10 text-primary font-black uppercase tracking-widest text-xs border border-primary/20 hover:bg-primary/20 transition-all transform hover:-translate-y-1">
                            Post Announcement
                        </button>
                        <button className="w-full text-left p-5 rounded-2xl bg-success/10 text-success font-black uppercase tracking-widest text-xs border border-success/20 hover:bg-success/20 transition-all transform hover:-translate-y-1">
                            Create Event
                        </button>
                        <button className="w-full text-left p-5 rounded-2xl bg-accent/10 text-accent font-black uppercase tracking-widest text-xs border border-accent/20 hover:bg-accent/20 transition-all transform hover:-translate-y-1">
                            Upload Document
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
