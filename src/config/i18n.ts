import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../assets/translations/en.json';
import et from '../assets/translations/et.json';
import th from '../assets/translations/th.json';

enum LANGUAGE {
  EN = 'en',
  ET = 'et',
  TH = 'th',
}

export const languages: string[] = Object.values(LANGUAGE);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  //all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
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
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
