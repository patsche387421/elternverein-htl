import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Target, CheckCircle, Euro, User, ArrowRight, X, Copy, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutUs = () => {
    const { t } = useTranslation();
    const points = t('about.points', { returnObjects: true }) as string[];
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const closeModal = useCallback(() => setShowPaymentModal(false), []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (showPaymentModal) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [showPaymentModal, closeModal]);

    useEffect(() => {
        if (showPaymentModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showPaymentModal]);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <main className="flex-grow">
            <SEO
                title={t('about.title')}
                description={t('about.desc')}
                keywords="Über uns, HTL Mödling, Elternverein, Vorstand, Ziele, Unterstützung"
            />

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
                <header className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('about.title')}</h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t('about.desc')}
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-12">
                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg">
                                <Target size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">{t('about.mission')}</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            {t('about.missionDesc')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground tracking-tight">{t('about.whatWeDo')}</h2>
                        <ul className="space-y-4">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <CheckCircle size={22} className="text-success mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-foreground/80 font-medium leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Membership & Costs */}
                <section className="bg-surface rounded-3xl p-8 md:p-16 border border-border relative overflow-hidden">
                    <div className="absolute top-0 end-0 p-12 text-primary/5 pointer-events-none">
                        <Euro size={200} strokeWidth={1} />
                    </div>

                    <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
                        <div className="inline-flex items-center justify-center p-5 bg-card rounded-3xl shadow-xl mb-2">
                            <Euro size={40} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-4">{t('costs.title')}</h2>
                            <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                                {t('costs.details')}
                            </p>
                        </div>
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="bg-primary text-primary-foreground px-8 py-5 rounded-3xl shadow-2xl inline-flex items-center gap-3 transform hover:scale-105 hover:-translate-y-1 transition-all cursor-pointer active:scale-[0.98]"
                        >
                            <span className="text-5xl font-black">€ 50,-</span>
                            <span className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm">/ {t('costs.membershipPerYear')}</span>
                        </button>
                        <p className="text-sm text-foreground/40 font-medium">
                            {t('about.paymentHint', 'Klicken für Zahlungsdetails')}
                        </p>
                    </div>
                </section>

                {/* Board Members Section */}
                <section className="space-y-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <h2 className="text-4xl font-bold text-foreground tracking-tight">{t('board.title')}</h2>
                        <Link to="/about/board" className="group flex items-center gap-2 text-primary font-bold text-lg hover:underline transition-all">
                            {t('about.board.viewDetails', 'Vollständige Details ansehen')} <ArrowRight size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { role: t('board.roles.chair'), name: "Max Mustermann" },
                            { role: t('board.roles.viceChair'), name: "Julia Sommer" },
                            { role: t('board.roles.treasurer'), name: "Thomas Bauer" },
                            { role: t('board.roles.secretary'), name: "Sarah Lang" },
                            { role: t('board.roles.member'), name: "Mag. Dr. Riegler" },
                            { role: t('board.roles.auditor'), name: "Ing. Huber" },
                        ].map((m, i) => (
                            <article key={i} className="bg-card p-6 rounded-3xl border border-border flex items-center gap-5 hover:border-primary/50 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center flex-shrink-0 text-foreground/30 group-hover:text-primary/50 transition-colors">
                                    <User size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground">{m.name}</h3>
                                    <p className="text-primary font-bold text-sm uppercase tracking-wide">{m.role}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            {/* Payment Details Modal */}
            {showPaymentModal && (
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
                        {/* Header */}
                        <div className="bg-primary p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Euro size={24} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white">{t('costs.paymentTitle', 'Zahlungsdetails')}</h2>
                                    <p className="text-white/70 text-sm font-medium">{t('costs.membershipPerYear', 'Jahr pro Familie')}</p>
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
                        <div className="p-6 space-y-4">
                            <div className="text-center py-4">
                                <span className="text-5xl font-black text-primary">€ 50,-</span>
                                <p className="text-foreground/50 font-bold text-sm uppercase tracking-widest mt-2">/ {t('costs.membershipPerYear')}</p>
                            </div>

                            {/* IBAN */}
                            <div className="bg-background rounded-2xl p-4 border border-border space-y-1">
                                <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">IBAN</p>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-mono font-bold text-foreground text-sm">AT12 3456 7890 1234 5678</p>
                                    <button
                                        onClick={() => handleCopy('AT12345678901234567', 'iban')}
                                        className="p-2 rounded-xl hover:bg-primary/10 text-foreground/40 hover:text-primary transition-colors"
                                        aria-label="IBAN kopieren"
                                    >
                                        {copied === 'iban' ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* BIC */}
                            <div className="bg-background rounded-2xl p-4 border border-border space-y-1">
                                <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">BIC</p>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-mono font-bold text-foreground text-sm">BKAUATWW</p>
                                    <button
                                        onClick={() => handleCopy('BKAUATWW', 'bic')}
                                        className="p-2 rounded-xl hover:bg-primary/10 text-foreground/40 hover:text-primary transition-colors"
                                        aria-label="BIC kopieren"
                                    >
                                        {copied === 'bic' ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Verwendungszweck */}
                            <div className="bg-background rounded-2xl p-4 border border-border space-y-1">
                                <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">{t('costs.reference', 'Verwendungszweck')}</p>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-bold text-foreground text-sm">EV Mitgliedsbeitrag + Name + Klasse</p>
                                    <button
                                        onClick={() => handleCopy('EV Mitgliedsbeitrag', 'ref')}
                                        className="p-2 rounded-xl hover:bg-primary/10 text-foreground/40 hover:text-primary transition-colors"
                                        aria-label="Verwendungszweck kopieren"
                                    >
                                        {copied === 'ref' ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                                <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-foreground/60 font-medium leading-relaxed">
                                    {t('costs.paymentNote', 'Die Daten sind Platzhalter. Bitte kontaktieren Sie den Vorstand für aktuelle Zahlungsinformationen.')}
                                </p>
                            </div>

                            <Link
                                to="/kontakt?thema=mitgliedschaft"
                                onClick={closeModal}
                                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98]"
                            >
                                {t('contact.title', 'Kontakt')}
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default AboutUs;
