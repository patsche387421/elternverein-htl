import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import SEO from '../components/SEO';

const CalendarPage = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Simple mock data for calendar days
    const calendarDays = Array.from({ length: 35 }, (_, i) => ({
        day: (i % 31) + 1,
        isCurrentMonth: i < 31,
        events: i === 12 ? ['Meeting'] : i === 20 ? ['Feast'] : []
    }));

    return (
        <div className="space-y-6">
            <SEO
                title="Veranstaltungskalender"
                description="Alle Termine und Veranstaltungen des Elternvereins auf einen Blick."
            />
            <div className="flex justify-between items-center px-4">
                <div>
                    <h1 className="text-3xl font-black text-foreground tracking-tighter">Shared Calendar</h1>
                    <p className="text-sm font-extrabold text-foreground/40 uppercase tracking-widest mt-1">View and manage all events</p>
                </div>
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 flex items-center gap-2">
                    <Plus size={20} strokeWidth={3} />
                    Add Event
                </button>
            </div>

            <div className="bg-card rounded-[2rem] border border-border shadow-2xl overflow-hidden self-start">
                {/* Calendar Header */}
                <div className="p-6 border-b border-border flex justify-between items-center bg-muted/30">
                    <h2 className="text-xl font-black text-foreground tracking-tight">{month} {year}</h2>
                    <div className="flex gap-3">
                        <button className="p-3 bg-surface hover:bg-primary/10 hover:text-primary rounded-xl border border-border transition-all">
                            <ChevronLeft size={20} strokeWidth={2.5} />
                        </button>
                        <button className="p-3 bg-surface hover:bg-primary/10 hover:text-primary rounded-xl border border-border transition-all">
                            <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid Days */}
                <div className="grid grid-cols-7 border-b border-border bg-muted/10">
                    {days.map(day => (
                        <div key={day} className="py-4 text-center text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] border-r border-border last:border-0">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {calendarDays.map((date, i) => (
                        <div
                            key={i}
                            className={`min-h-[140px] p-4 border-r border-b border-border last:border-r-0 hover:bg-primary/5 transition-colors relative group ${!date.isCurrentMonth ? 'bg-muted/10 text-foreground/20' : 'text-foreground/80'}`}
                        >
                            <span className="text-sm font-black tracking-tighter">{date.day}</span>
                            <div className="mt-1 space-y-1">
                                {date.events.map((event, idx) => (
                                    <div key={idx} className="text-[10px] py-1 px-1.5 bg-primary/10 text-primary rounded border border-primary/20 truncate">
                                        {event}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
