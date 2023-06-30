import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import global__en from './translations/en/global.json'
import global__sr from './translations/sr/global.json'

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: global__en,
    },
    sr: {
      translation: global__sr,
    },
  },
})

export default i18n
