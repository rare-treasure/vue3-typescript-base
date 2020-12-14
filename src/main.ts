import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import helpers from './helpers';
import tooltip from '@/directives/tooltip';

import 'reset-css';
import '@/assets/scss/global.scss';

const app = createApp(App)

export default app;

app
  .use(helpers)
  .use(router)
  .directive('tooltip', tooltip)
  .mount('#app')

app.config.performance = process.env.NODE_ENV !== 'production';