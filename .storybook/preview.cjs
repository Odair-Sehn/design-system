import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';
import 'quasar/dist/quasar.css';
import '../src/styles/dass-tokens.css';
import "../src/styles/class-preview-sb.css"

import { app } from '@storybook/vue3';
import { Quasar } from 'quasar';

app.use(Quasar, {});

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
        "Instalação",
        "Tematização",
        "Guia de Estilo",
        "Componentes",
        "Leiautes",
      ],
    },
  },
}