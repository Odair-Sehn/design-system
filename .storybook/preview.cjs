import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';
import 'quasar/dist/quasar.css';
import '../src/styles/dass-tokens.css';
import "../src/styles/class-preview-sb.css"
import { createI18n } from 'vue-i18n';
import enUS from '../src/locales/en'
import es from '../src/locales/es'
import ptBR from '../src/locales/pt_BR'

import { app } from '@storybook/vue3';
import { Quasar } from 'quasar';

const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'pt_BR',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pt_BR',
  messages: {
    en: enUS,
    es,
    pt_BR: ptBR
  }
});

app.use(Quasar, {}).use(i18n);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
  docs: {
    inlineStories: true,
  },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Início",
        "Guia de Estilo",
        "Componentes",
        "Leiautes",
      ],
    },
  },
}