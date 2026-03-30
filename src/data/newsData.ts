export type NewsCategory = 'all' | 'news' | 'event' | 'protocol';

export interface NewsItem {
    id: string;
    type: Exclude<NewsCategory, 'all'>;
    date: string;
    titleKey: string;
    descKey: string;
    image: string;
}

export const newsData: NewsItem[] = [
    {
        id: "festival",
        type: "event",
        date: "15.10.2026",
        titleKey: "news.items.festival.title",
        descKey: "news.items.festival.desc",
        image: "/pics/Ausflug_1.webp"
    },
    {
        id: "mentalHealth",
        type: "news",
        date: "10.03.2026",
        titleKey: "news.items.mentalHealth.title",
        descKey: "news.items.mentalHealth.desc",
        image: "/pics/Event_Tag der offenen Tür_1.webp"
    },
    {
        id: "agm",
        type: "event",
        date: "15.10.2025",
        titleKey: "news.items.agm.title",
        descKey: "news.items.agm.desc",
        image: "/pics/Praesentation_1.webp" 
    },
    {
        id: "sga",
        type: "protocol",
        date: "01.10.2025",
        titleKey: "news.items.sga.title",
        descKey: "news.items.sga.desc",
        image: "/pics/Protokoll_Vorschau_1.webp"
    },
    {
        id: "funding",
        type: "news",
        date: "20.09.2025",
        titleKey: "news.items.funding.title",
        descKey: "news.items.funding.desc",
        image: "/pics/Labor_3.webp"
    },
    {
        id: "jhv",
        type: "protocol",
        date: "22.09.2025",
        titleKey: "news.items.jhv.title",
        descKey: "news.items.jhv.desc",
        image: "/pics/Protokoll_Vorschau_1.webp"
    },
    {
        id: "parentsDay",
        type: "event",
        date: "10.12.2025",
        titleKey: "news.items.parentsDay.title",
        descKey: "news.items.parentsDay.desc",
        image: "/pics/htl-gebaude-von-oben-2.webp"
    }
];
