import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    image?: string;
    canonical?: string;
    keywords?: string;
    date?: string; // Optional for NewsArticle
}

const SEO = ({
    title,
    description,
    name = 'Elternverein HTL Mödling',
    type = 'website',
    image = '/og-image.jpg',
    canonical,
    keywords,
    date
}: SEOProps) => {
    const { i18n } = useTranslation();
    const siteUrl = 'https://elternverein.at'; // Example domain
    const fullTitle = `${title} | ${name}`;

    // Conditional JSON-LD Schema
    const schemaMarkup = type === 'article' ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": title,
        "description": description,
        "image": `${siteUrl}${image}`,
        "datePublished": date || new Date().toISOString(),
        "publisher": {
            "@type": "Organization",
            "name": name,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        }
    } : {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Technikerstraße 1-5",
            "addressLocality": "Mödling",
            "postalCode": "2340",
            "addressCountry": "AT"
        }
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            {keywords && <meta name='keywords' content={keywords} />}
            <html lang={i18n.language} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
        </Helmet>
    );
};

export default SEO;
