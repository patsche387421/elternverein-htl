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
            color: 'text-destructive',
            bg: 'bg-destructive/10',
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
            color: 'text-secondary',
            bg: 'bg-secondary/10',
            features: t('services.coursesPoints', { returnObjects: true }) as string[]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            <SEO
                title={t('services.title')}
                description={t('services.desc')}
            />

            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t('services.title')}</h1>
                <p className="text-xl text-foreground/70">
                    {t('services.desc')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.id} id={service.id} className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                            <service.icon size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                        <p className="text-foreground/70 mb-6 min-h-[3rem]">
                            {service.desc}
                        </p>

                        <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <CheckCircle size={18} className={`mt-0.5 flex-shrink-0 ${service.color}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full mt-8 py-3 rounded-xl border border-border font-semibold hover:bg-primary/5 hover:text-primary transition-colors text-foreground/80">
                            {t('services.learnMore')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
