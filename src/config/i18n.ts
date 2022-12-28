import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../assets/translations/en.json';
import et from '../assets/translations/et.json';
import th from '../assets/translations/th.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  //all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    resources: {
      en: {
        translation: en,
      },
      et: {
        translation: et,
      },
      th: {
        translation: th,
      },
    },
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
