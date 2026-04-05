import { ChevronLeft, ChevronRight, Plus, X, Download, Pencil, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';

interface CalendarEvent {
    id: string;
    title: string;
    date: string;      // e.g. "2026-04-12"
    time: string;       // e.g. "14:00"
    description: string;
}

const CalendarPage = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [showEventModal, setShowEventModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
    const [toast, setToast] = useState<string | null>(null);

    // Form state
    const [formTitle, setFormTitle] = useState('');
    const [formDate, setFormDate] = useState('');
    const [formTime, setFormTime] = useState('14:00');
    const [formDesc, setFormDesc] = useState('');

    // Month navigation state
    const [currentDate, setCurrentDate] = useState(new Date());

    // Custom events state
    const [customEvents, setCustomEvents] = useState<CalendarEvent[]>([
        { id: 'mock-1', title: 'Vorstandssitzung', date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-12`, time: '18:00', description: 'Monatliche Vorstandssitzung im Konferenzraum.' },
        { id: 'mock-2', title: 'Sommerfest', date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-20`, time: '15:00', description: 'Jährliches Sommerfest im Schulgarten.' },
    ]);

    const showToastMessage = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    useEffect(() => {
        if (searchParams.get('new') === 'true') {
            openNewEventModal();
            setSearchParams({});
        }
    }, [searchParams, setSearchParams]);

    const openNewEventModal = () => {
        setEditingEvent(null);
        setFormTitle('');
        setFormDate('');
        setFormTime('14:00');
        setFormDesc('');
        setShowEventModal(true);
    };

    const openEditEventModal = (event: CalendarEvent) => {
        setEditingEvent(event);
        setFormTitle(event.title);
        setFormDate(event.date);
        setFormTime(event.time);
        setFormDesc(event.description);
        setShowEventModal(true);
    };

    const closeModal = useCallback(() => setShowEventModal(false), []);

    const handleSaveEvent = () => {
        if (!formTitle.trim() || !formDate) return;

        if (editingEvent) {
            // Update existing
            setCustomEvents(prev => prev.map(e =>
                e.id === editingEvent.id
                    ? { ...e, title: formTitle, date: formDate, time: formTime, description: formDesc }
                    : e
            ));
            showToastMessage('Termin aktualisiert');
        } else {
            // Create new
            const newEvent: CalendarEvent = {
                id: `evt-${Date.now()}`,
                title: formTitle,
                date: formDate,
                time: formTime,
                description: formDesc,
            };
            setCustomEvents(prev => [...prev, newEvent]);
            showToastMessage('Termin erstellt');
        }
        closeModal();
    };

    const handleDeleteEvent = (id: string) => {
        setCustomEvents(prev => prev.filter(e => e.id !== id));
        closeModal();
        showToastMessage('Termin gelöscht');
    };

    // ── ICS Export ──
    const exportEventAsICS = (event: CalendarEvent) => {
        const dateParts = event.date.split('-');
        const timeParts = event.time.split(':');
        const startDate = new Date(
            parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]),
            parseInt(timeParts[0]), parseInt(timeParts[1])
        );
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1h

        const pad = (n: number) => String(n).padStart(2, '0');
        const toICS = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

        const ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Elternverein HTL Mödling//DE',
            'BEGIN:VEVENT',
            `DTSTART:${toICS(startDate)}`,
            `DTEND:${toICS(endDate)}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
            'LOCATION:HTL Mödling',
            `UID:${event.id}@elternverein.today`,
            'END:VEVENT',
            'END:VCALENDAR',
        ].join('\r\n');

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${event.title.replace(/\s+/g, '_')}.ics`;
        a.click();
        URL.revokeObjectURL(url);
        showToastMessage('Kalender-Datei heruntergeladen');
    };

    const exportAllAsICS = () => {
        if (customEvents.length === 0) {
            showToastMessage('Keine Termine zum Exportieren');
            return;
        }

        const pad = (n: number) => String(n).padStart(2, '0');
        const toICS = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

        const vevents = customEvents.map(event => {
            const dateParts = event.date.split('-');
            const timeParts = event.time.split(':');
            const startDate = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]), parseInt(timeParts[0]), parseInt(timeParts[1]));
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
            return [
                'BEGIN:VEVENT',
                `DTSTART:${toICS(startDate)}`,
                `DTEND:${toICS(endDate)}`,
                `SUMMARY:${event.title}`,
                `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
                'LOCATION:HTL Mödling',
                `UID:${event.id}@elternverein.today`,
                'END:VEVENT',
            ].join('\r\n');
        });

        const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Elternverein HTL Mödling//DE', ...vevents, 'END:VCALENDAR'].join('\r\n');

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'elternverein_kalender.ics';
        a.click();
        URL.revokeObjectURL(url);
        showToastMessage('Alle Termine exportiert');
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (showEventModal) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [showEventModal, closeModal]);

    useEffect(() => {
        if (showEventModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showEventModal]);

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

    // Get events for a specific day
    const getEventsForDay = (day: number): CalendarEvent[] => {
        const dateStr = `${year}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return customEvents.filter(e => e.date === dateStr);
    };

    const calendarDays: { day: number | ''; isCurrentMonth: boolean; events: CalendarEvent[] }[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push({ day: '', isCurrentMonth: false, events: [] });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push({ day: i, isCurrentMonth: true, events: getEventsForDay(i) });
    }

    while (calendarDays.length % 7 !== 0) {
        calendarDays.push({ day: '', isCurrentMonth: false, events: [] });
    }

    return (
        <div className="space-y-6 relative">
            <SEO
                title={t('dashboard.calendar.title', 'Shared Calendar')}
                description={t('dashboard.calendar.subtitle', 'Veranstaltungskalender')}
            />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4">
                <div>
                    <h1 className="text-3xl font-black text-foreground tracking-tighter">{t('dashboard.calendar.title', 'Shared Calendar')}</h1>
                    <p className="text-sm font-extrabold text-foreground/40 uppercase tracking-widest mt-1">{t('dashboard.calendar.subtitle', 'View and manage all events')}</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={exportAllAsICS}
                        className="bg-surface text-foreground/70 px-5 py-3 rounded-2xl font-bold text-sm border border-border hover:border-primary/30 hover:text-primary transition-all flex items-center gap-2"
                    >
                        <Download size={18} />
                        Exportieren
                    </button>
                    <button
                        onClick={openNewEventModal}
                        className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        <Plus size={20} strokeWidth={3} />
                        {t('dashboard.calendar.add', 'Add Event')}
                    </button>
                </div>
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
                                {date.events.map((event) => (
                                    <button
                                        key={event.id}
                                        onClick={() => openEditEventModal(event)}
                                        className="w-full text-left text-[10px] py-1 px-1.5 bg-primary/10 text-primary rounded border border-primary/20 truncate hover:bg-primary/20 transition-colors flex items-center gap-1"
                                    >
                                        <Pencil size={8} className="shrink-0" />
                                        {event.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Event Modal (Create / Edit) ── */}
            {showEventModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={closeModal} />
                    <div className="relative z-10 w-full max-w-md bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        <div className="bg-primary p-6 flex items-center justify-between">
                            <h2 className="text-xl font-black text-white">
                                {editingEvent ? 'Termin bearbeiten' : t('dashboard.calendar.add', 'Add Event')}
                            </h2>
                            <button onClick={closeModal} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">Titel *</label>
                                <input
                                    type="text"
                                    value={formTitle}
                                    onChange={e => setFormTitle(e.target.value)}
                                    placeholder="z.B. Elternabend"
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">Datum *</label>
                                    <input
                                        type="date"
                                        value={formDate}
                                        onChange={e => setFormDate(e.target.value)}
                                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">Uhrzeit</label>
                                    <input
                                        type="time"
                                        value={formTime}
                                        onChange={e => setFormTime(e.target.value)}
                                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-foreground/50 uppercase tracking-widest mb-2">Beschreibung</label>
                                <textarea
                                    rows={3}
                                    value={formDesc}
                                    onChange={e => setFormDesc(e.target.value)}
                                    placeholder="Optionale Details..."
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                {editingEvent && (
                                    <button
                                        onClick={() => handleDeleteEvent(editingEvent.id)}
                                        className="p-3 rounded-xl border border-danger/30 text-danger hover:bg-danger/10 transition-all"
                                        title="Termin löschen"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                )}
                                {editingEvent && (
                                    <button
                                        onClick={() => exportEventAsICS(editingEvent)}
                                        className="p-3 rounded-xl border border-border text-foreground/60 hover:text-primary hover:border-primary/30 transition-all"
                                        title="Als .ics exportieren"
                                    >
                                        <Download size={18} />
                                    </button>
                                )}
                                <button
                                    onClick={closeModal}
                                    className="flex-1 py-3 rounded-xl border border-border font-bold text-foreground/60 hover:bg-muted transition-all text-sm"
                                >
                                    Abbrechen
                                </button>
                                <button
                                    onClick={handleSaveEvent}
                                    className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all"
                                >
                                    {editingEvent ? 'Speichern' : 'Erstellen'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className="flex items-center gap-3 bg-surface border border-border rounded-2xl px-6 py-4 shadow-2xl">
                        <Download size={18} className="text-primary flex-shrink-0" />
                        <p className="text-sm font-bold text-foreground">{toast}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
