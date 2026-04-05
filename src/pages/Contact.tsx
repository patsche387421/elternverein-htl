import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Mock successful form submission
        setToast(t('contact.form.success', 'Ihre Nachricht wurde erfolgreich gesendet!'));
        
        // Reset form
        setName('');
        setEmail('');
        setMessage('');

        // Hide toast after 4s
        setTimeout(() => setToast(null), 4000);
    };

    return (
        <main className="flex-grow relative">
            <SEO
                title={t('contact.title')}
                description={t('contact.desc')}
                keywords="Kontakt, Elternverein, HTL Mödling, E-Mail, Telefon, Büro"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('contact.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('contact.desc')}
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-foreground tracking-tight">{t('contact.subtitle')}</h2>
                            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                                {t('contact.form.infoText')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <article className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-border group hover:border-primary/50 transition-all">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 font-black uppercase tracking-widest mb-1">{t('contact.form.emailLabel')}</p>
                                    <p className="text-lg font-bold text-foreground">
                                        <a href="mailto:office@elternverein.today" className="hover:text-primary transition-colors">
                                            office@elternverein.today
                                        </a>
                                    </p>

                                </div>
                            </article>

                            <article className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-border group hover:border-primary/50 transition-all">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 font-black uppercase tracking-widest mb-1">{t('contact.form.phoneLabel')}</p>
                                    <p className="text-lg font-bold text-foreground">+43 1 234 5678</p>
                                </div>
                            </article>

                            <article className="flex items-center gap-6 p-6 bg-surface rounded-3xl border border-border group hover:border-primary/50 transition-all">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-inner">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 font-black uppercase tracking-widest mb-1">{t('contact.form.officeLabel')}</p>
                                    <p className="text-lg font-bold text-foreground">{t('contact.form.officeLocation')}</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-10 rounded-3xl shadow-2xl border border-border relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-foreground/60 uppercase tracking-widest ml-2" htmlFor="name">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-foreground focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-foreground/60 uppercase tracking-widest ml-2" htmlFor="email">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-foreground focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-foreground/60 uppercase tracking-widest ml-2" htmlFor="message">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={5}
                                    className="w-full px-6 py-4 rounded-2xl border border-border bg-background text-foreground focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <Send size={20} strokeWidth={2.5} />
                                {t('home.getInvolved')}
                            </button>
                        </form>
                    </div>
                </section>
            </div>

            {/* Success Toast */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className="flex items-center gap-3 bg-success text-white border border-success/20 rounded-2xl px-6 py-4 shadow-2xl">
                        <CheckCircle size={20} className="flex-shrink-0" />
                        <p className="text-sm font-bold">{toast}</p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Contact;
