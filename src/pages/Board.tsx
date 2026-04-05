import { useState, useEffect, useCallback } from 'react';
import { Users, X, User, Mail, Calendar, Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface BoardMember {
    role: string;
    name: string;
    email: string;
    term: string;
    bio: string;
}

const Board = () => {
    const { t } = useTranslation();
    const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

    const members: BoardMember[] = [
        {
            role: t('board.roles.chair'),
            name: "Max Mustermann",
            email: "obmann@elternverein.today",
            term: "2024 - 2026",
            bio: "Max engagiert sich seit 5 Jahren im Elternverein und legt seinen Fokus auf die Digitalisierung der Schulinfrastruktur und bessere Kommunikation zwischen Schule und Eltern."
        },
        {
            role: t('board.roles.viceChair'),
            name: "Julia Sommer",
            email: "stellvertreter@elternverein.today",
            term: "2023 - 2025",
            bio: "Als zweifache Mutter an der HTL bringt Julia ihre Expertise im Bereich Eventorganisation ein. Sie leitet das Komitee für den jährlichen HTL-Ball."
        },
        {
            role: t('board.roles.treasurer'),
            name: "Thomas Bauer",
            email: "kassier@elternverein.today",
            term: "2024 - 2026",
            bio: "Thomas ist Finanzberater und sorgt für die transparente und effiziente Verwaltung der Mitgliedsbeiträge sowie die faire Vergabe von Projektförderungen."
        },
        {
            role: t('board.roles.secretary'),
            name: "Sarah Lang",
            email: "schriftfuehrer@elternverein.today",
            term: "2024 - 2025",
            bio: "Sarah dokumentiert alle Vorstandssitzungen und koordiniert die Newsletter, um alle Eltern stets aktuell über Aktivitäten des Elternvereins zu informieren."
        },
    ];

    const closeModal = useCallback(() => setSelectedMember(null), []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (selectedMember) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [selectedMember, closeModal]);

    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedMember]);

    return (
        <main className="flex-grow">
            <SEO
                title={t('board.title')}
                description={t('board.desc')}
                keywords="Vorstand, Elternverein, HTL Mödling, Kontakt, Team"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-2xl mb-4 shadow-inner">
                        <Users size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('board.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('board.desc')}
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {members.map((m, i) => (
                        <article key={i} className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-all hover:shadow-xl">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center flex-shrink-0 text-foreground/20 group-hover:text-primary transition-colors">
                                    <User size={32} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{m.role}</p>
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{m.name}</h3>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 mt-auto">
                                <button
                                    onClick={() => setSelectedMember(m)}
                                    className="flex-1 py-3 bg-surface border border-border text-foreground rounded-xl font-bold text-sm hover:bg-background hover:border-primary/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    <Info size={16} />
                                    Details
                                </button>
                                <Link
                                    to={`/kontakt?person=${encodeURIComponent(m.name)}`}
                                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    <Mail size={16} />
                                    Kontakt
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </div>

            {/* Member Details Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={closeModal}
                    />

                    <div className="relative z-10 w-full max-w-lg bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                        {/* Header */}
                        <div className="bg-primary p-6 flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <User size={32} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">{selectedMember.role}</p>
                                    <h2 className="text-2xl font-black text-white">{selectedMember.name}</h2>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                aria-label="Schließen"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            <div className="bg-background rounded-2xl p-5 border border-border space-y-4">
                                <div>
                                    <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-1">Amtszeit</p>
                                    <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                                        <Calendar size={16} className="text-primary" />
                                        {selectedMember.term}
                                    </div>
                                </div>
                                
                                <div className="w-full h-px bg-border"></div>
                                
                                <div>
                                    <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mb-2">Über {selectedMember.name}</p>
                                    <p className="text-foreground/80 font-medium leading-relaxed text-sm">
                                        {selectedMember.bio}
                                    </p>
                                </div>
                            </div>

                            <Link
                                to={`/kontakt?person=${encodeURIComponent(selectedMember.name)}`}
                                onClick={closeModal}
                                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98]"
                            >
                                Nachricht an {selectedMember.name.split(' ')[0]} senden
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Board;
