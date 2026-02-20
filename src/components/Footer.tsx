import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useState } from 'react';
import { DesignPreview } from './DesignPreview';

const Footer = () => {
    const { t } = useTranslation();
    const [previewOpen, setPreviewOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border py-12 mt-auto text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-primary mb-2">Elternverein</h3>
                        <p className="text-sm text-foreground/70 mb-4">
                            HTL Mödling
                        </p>
                        <p className="text-sm text-foreground/70">
                            Technikerstraße 1-5<br />
                            2340 Mödling
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="font-semibold text-foreground mb-2">{t('footer.links')}</h4>
                        <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('nav.about')}</Link>
                        <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('nav.services')}</Link>
                        <Link to="/projects" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('nav.projects')}</Link>
                        <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('nav.contact')}</Link>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="font-semibold text-foreground mb-2">{t('footer.legal')}</h4>
                        <Link to="/impressum" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('footer.impressum')}</Link>
                        <Link to="/datenschutz" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('footer.privacy')}</Link>
                        <Link to="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">{t('footer.terms')}</Link>
                        <button
                            onClick={() => setPreviewOpen(true)}
                            className="text-left text-sm text-foreground/50 hover:text-primary transition-colors mt-2"
                        >
                            Design-Vorschau
                        </button>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">{t('footer.socials')}</h4>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border">
                                <Facebook size={20} />
                            </a>
                            <a href="mailto:office@elternverein.today" className="p-2 bg-background rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center">
                    <p className="text-sm text-foreground/50">
                        &copy; {currentYear} Elternverein HTL Mödling. All rights reserved.
                    </p>
                </div>
            </div>

            <DesignPreview
                isOpen={previewOpen}
                onClose={() => setPreviewOpen(false)}
            />
        </footer>
    );
};

export default Footer;
