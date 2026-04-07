import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';
import ua from './locales/ua.json';
import es from './locales/es.json';
import it from './locales/it.json';
import fr from './locales/fr.json';
import pl from './locales/pl.json';

import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ro from './locales/ro.json';
import hr from './locales/hr.json';
import sr from './locales/sr.json';
import sl from './locales/sl.json';
import hu from './locales/hu.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            de: { translation: de },
            tr: { translation: tr },
            ua: { translation: ua },
            es: { translation: es },
            it: { translation: it },
            fr: { translation: fr },
            pl: { translation: pl },
            ar: { translation: ar },
            pt: { translation: pt },
            ro: { translation: ro },
            hr: { translation: hr },
            sr: { translation: sr },
            sl: { translation: sl },
            hu: { translation: hu }
        }
    });

export default i18n;
