import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { fallbackLng, languages, defaultNS } from './setting';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    // debug: true, // შეგიძლია ჩართო საჭიროებისამებრ
    supportedLngs: languages,
    fallbackLng,
    lng: undefined, // ენას ავტომატურად განსაზღვრავს LanguageDetector
    fallbackNS: defaultNS,
    defaultNS,
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export default i18next;
