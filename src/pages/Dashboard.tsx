import { Bell, Calendar, Users, FileText } from 'lucide-react';

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
            <div className="flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <div className="text-sm text-gray-500">Welcome back, Patrick</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b flex justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                        <button className="text-sm text-primary hover:underline">View All</button>
                    </div>
                    <div className="divide-y">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-900">{activity.title}</p>
                                    <p className="text-sm text-gray-500">by {activity.user}</p>
                                </div>
                                <div className="text-xs text-gray-400 font-mono">
                                    {activity.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Announcements */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
                    <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
                    <div className="grid grid-cols-1 gap-3">
                        <button className="w-full text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition">
                            Post Announcement
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg bg-success/10 text-success font-medium hover:bg-success/20 transition">
                            Create Event
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent/20 transition">
                            Upload Document
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
