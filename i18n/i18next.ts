// src/i18n/i18next.ts

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // დატვირთავს JSON-ებს public-იდან
import { fallbackLng, languages, defaultNS } from './setting';

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    supportedLngs: languages,
    defaultNS,
    fallbackNS: defaultNS,
    debug: false, // საჭიროების მიხედვით ჩართე
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React უკვე აკეთებს escaping-ს
    },
  });

export default i18next;
