import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from "./en.json";
import zhTWTranslations from "./zhTW.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  "zh-TW": {
    translation: zhTWTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh-TW'],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
