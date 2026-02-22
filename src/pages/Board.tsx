import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Board = () => {
    const { t } = useTranslation();

    const members = [
        { role: t('board.roles.chair'), name: "Max Mustermann", email: "obmann@elternverein.today" },
        { role: t('board.roles.viceChair'), name: "Julia Sommer", email: "stellvertreter@elternverein.today" },
        { role: t('board.roles.treasurer'), name: "Thomas Bauer", email: "kassier@elternverein.today" },
        { role: t('board.roles.secretary'), name: "Sarah Lang", email: "schriftfuehrer@elternverein.today" },
    ];

    return (
        <main className="flex-grow">
            <SEO
                title={t('board.title')}
                description={t('board.desc')}
                keywords="Vorstand, Elternverein, HTL Mödling, Kontakt, Team"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-5 bg-primary/10 text-primary rounded-[2rem] mb-4 shadow-inner">
                        <Users size={40} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">{t('board.title')}</h1>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('board.desc')}
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {members.map((m, i) => (
                        <article key={i} className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex items-center justify-between group hover:border-primary/50 transition-all hover:shadow-xl">
                            <div>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{m.role}</p>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{m.name}</h3>
                            </div>
                            <a
                                href={`mailto:${m.email}`}
                                className="inline-flex items-center justify-center px-6 py-2 bg-surface text-foreground rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
                                aria-label={`E-Mail an ${m.name} senden`}
                            >
                                Kontakt
                            </a>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Board;
