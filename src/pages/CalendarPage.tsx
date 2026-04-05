import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';

const CalendarPage = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [showNewEventModal, setShowNewEventModal] = useState(false);
    
    // Month navigation state
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        if (searchParams.get('new') === 'true') {
            setShowNewEventModal(true);
            setSearchParams({}); // Consume the parameter
        }
    }, [searchParams, setSearchParams]);

    const closeModal = useCallback(() => setShowNewEventModal(false), []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (showNewEventModal) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [showNewEventModal, closeModal]);

    useEffect(() => {
        if (showNewEventModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showNewEventModal]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

    const calendarDays = [];
    
    // Empty boxes for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push({ day: '', isCurrentMonth: false, events: [] });
    }
    
    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
        // Mock some events depending on the month
        const mockEvents = [];
        if (currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
             if (i === 12) mockEvents.push('Meeting');
             if (i === 20) mockEvents.push('Feast');
        } else {
             if (i === 5) mockEvents.push('Workshop');
             if (i === 15) mockEvents.push('Elternsprechtag');
        }
        calendarDays.push({ day: i, isCurrentMonth: true, events: mockEvents });
    }
    
    // Fill the remainder of the week
    while (calendarDays.length % 7 !== 0) {
        calendarDays.push({ day: '', isCurrentMonth: false, events: [] });
    }

    return (
        <div className="space-y-6">
            <SEO
                title={t('dashboard.calendar.title', 'Shared Calendar')}
                description={t('dashboard.calendar.subtitle', 'Veranstaltungskalender')}
            />
            <div className="flex justify-between items-center px-4">
                <div>
                    <h1 className="text-3xl font-black text-foreground tracking-tighter">{t('dashboard.calendar.title', 'Shared Calendar')}</h1>
                    <p className="text-sm font-extrabold text-foreground/40 uppercase tracking-widest mt-1">{t('dashboard.calendar.subtitle', 'View and manage all events')}</p>
                </div>
                <button 
                    onClick={() => setShowNewEventModal(true)}
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 flex items-center gap-2"
                >
                    <Plus size={20} strokeWidth={3} />
                    {t('dashboard.calendar.add', 'Add Event')}
                </button>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden self-start">
                {/* Calendar Header */}
                <div className="p-6 border-b border-border flex justify-between items-center bg-muted/30">
                    <h2 className="text-xl font-black text-foreground tracking-tight">{month} {year}</h2>
                    <div className="flex gap-3">
                        <button 
                            onClick={handlePrevMonth}
                            className="p-3 bg-surface hover:bg-primary/10 hover:text-primary rounded-xl border border-border transition-all"
                        >
                            <ChevronLeft size={20} strokeWidth={2.5} />
                        </button>
                        <button 
                            onClick={handleNextMonth}
                            className="p-3 bg-surface hover:bg-primary/10 hover:text-primary rounded-xl border border-border transition-all"
                        >
                            <ChevronRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid Days */}
                <div className="grid grid-cols-7 border-b border-border bg-muted/10">
                    {days.map(day => (
                        <div key={day} className="py-4 text-center text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] border-r border-border last:border-0">
                            {t(`dashboard.calendar.days.${day.toLowerCase()}`, day)}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {calendarDays.map((date, i) => (
                        <div
                            key={i}
                            className={`min-h-[140px] p-4 border-r border-b border-border last:border-r-0 transition-colors relative group ${!date.isCurrentMonth ? 'bg-muted/10 text-foreground/20' : 'text-foreground/80 hover:bg-primary/5 cursor-pointer'}`}
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

            {/* New Event Modal (Mock) */}
            {showNewEventModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={closeModal}
                    />
                    <div className="relative z-10 w-full max-w-md bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <div className="bg-primary p-6 flex items-center justify-between">
                            <h2 className="text-xl font-black text-white">{t('dashboard.calendar.add', 'Add Event')}</h2>
                            <button
                                onClick={closeModal}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4 text-center">
                            <p className="text-foreground/70 font-medium">Dies ist eine Demo. Termin erstellen ist in dieser Version nicht funktional implementiert.</p>
                            <button
                                onClick={closeModal}
                                className="w-full bg-primary text-primary-foreground py-3 rounded-2xl font-black uppercase tracking-widest mt-4"
                            >
                                Schließen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
