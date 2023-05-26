import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: false,
    detection: { order: ['localStorage', 'navigator'] },
    interpolation: {
      escapeValue: false,
    },
  });

// eslint-disable-next-line import/no-default-export
export default i18n;
