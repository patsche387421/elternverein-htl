import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    type?: string;
    image?: string;
    canonical?: string;
    date?: string;
}

const SEO = ({
    title,
    description = 'Der Elternverein der HTL Mödling unterstützt die Schulgemeinschaft, fördert innovative Projekte und bietet soziale Hilfe für Schüler und Familien.',
}: SEOProps) => {
    useEffect(() => {
        // Update document title
        const fullTitle = `${title} | Elternverein HTL Mödling`;
        document.title = fullTitle;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
