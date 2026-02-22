import { Heart, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 'support',
            icon: Heart,
            title: t('services.support'),
            desc: t('services.supportDesc'),
            color: 'text-primary',
            bg: 'bg-primary/10',
            features: t('services.supportPoints', { returnObjects: true }) as string[]
        },
        {
            id: 'tutoring',
            icon: BookOpen,
            title: t('services.tutoring'),
            desc: t('services.tutoringDesc'),
            color: 'text-primary',
            bg: 'bg-primary/10',
            features: t('services.tutoringPoints', { returnObjects: true }) as string[]
        },
        {
            id: 'courses',
            icon: GraduationCap,
            title: t('services.courses'),
            desc: t('services.coursesDesc'),
            color: 'text-primary',
            bg: 'bg-primary/10',
            features: t('services.coursesPoints', { returnObjects: true }) as string[]
        }
    ];

    return (
        <main className="flex-grow">
            <SEO
                title={t('services.title')}
                description={t('services.desc')}
                keywords="Services, Unterstützung, Nachhilfe, Kurse, Elternverein, HTL Mödling"
            />

            <div className="container mx-auto px-4 py-12 space-y-16">
                <header className="text-center max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
                        {t('services.title')}
                    </h1>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed">
                        {t('services.desc')}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            id={service.id}
                            className="group relative overflow-hidden bg-surface/50 backdrop-blur-sm rounded-3xl p-10 border border-primary/10 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Decorative Top Line */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                            {/* Icon Container with HSL-derived background */}
                            <div className={`w-20 h-20 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 shadow-inner transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20`}>
                                <service.icon size={40} strokeWidth={2.5} />
                            </div>

                            <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-lg text-foreground/60 mb-8 min-h-[4rem] leading-relaxed font-medium">
                                {service.desc}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 text-foreground/80 font-medium group/item">
                                        <div className="mt-1 flex-shrink-0 text-primary group-hover/item:scale-110 transition-transform">
                                            <CheckCircle size={20} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-5 rounded-2xl border-2 border-primary/20 font-black uppercase tracking-widest text-primary/60 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 transform active:scale-95
                                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none">
                                {t('services.learnMore')}
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Services;
