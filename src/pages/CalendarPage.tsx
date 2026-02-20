import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

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
            <div className="flex justify-between items-center px-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Shared Calendar</h1>
                    <p className="text-sm text-gray-500">View and manage all school related events.</p>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition flex items-center gap-2">
                    <Plus size={18} />
                    Add Event
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Calendar Header */}
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-lg font-bold text-gray-800">{month} {year}</h2>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-white rounded-md border transition">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 hover:bg-white rounded-md border transition">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 border-b">
                    {days.map(day => (
                        <div key={day} className="py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-wider border-r last:border-0">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 border-collapse">
                    {calendarDays.map((date, i) => (
                        <div
                            key={i}
                            className={`min-h-[100px] p-2 border-r border-b last:border-r-0 hover:bg-gray-50 transition-colors relative ${!date.isCurrentMonth ? 'bg-gray-50 text-gray-300' : 'text-gray-700'}`}
                        >
                            <span className="text-sm font-medium">{date.day}</span>
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
