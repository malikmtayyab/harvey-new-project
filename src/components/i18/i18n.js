// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

function initializeI18n(language) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslation,
        },
        fr: {
          translation: frTranslation,
        },
      },
      lng: language, // Set language dynamically
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default initializeI18n;
