import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../assets/translations/en.json';
import et from '../assets/translations/et.json';
import th from '../assets/translations/th.json';

export const LANGUAGE: { [key: string]: { [key: string]: unknown } } = {
  EN: en,
  ET: et,
  TH: th,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  //all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: LANGUAGE.EN,
      },
      et: {
        translation: LANGUAGE.ET,
      },
      th: {
        translation: LANGUAGE.TH,
      },
    },
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
