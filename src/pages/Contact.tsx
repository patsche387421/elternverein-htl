import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4 py-12">
            <SEO
                title={t('contact.title')}
                description={t('contact.desc')}
            />

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('contact.title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('contact.subtitle')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {t('contact.desc')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                            <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                                <p>info@elternverein.today</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                            <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                                <p>+43 1 234 5678</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                            <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Office</p>
                                <p>School Main Building, Room 101</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.name')}</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-shadow"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.email')}</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-shadow"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.message')}</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none"
                                placeholder="..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                            <Send size={18} />
                            {t('contact.form.send')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
