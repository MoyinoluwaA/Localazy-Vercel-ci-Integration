import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: require('./assets/locales/en.json')
  },
  cs: {
    translation: require('./assets/locales/cs.json')
  },
  es: {
    translation: require('./assets/locales/es.json')
  },
  fi: {
    translation: require('./assets/locales/fi.json')
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
