import { createI18n } from 'vue-i18n'
import es from './locales/es'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es,
    en: {}
  },
  allowComposition: true
})

export default i18n