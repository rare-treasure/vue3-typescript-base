import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import helpers from './helpers';

import 'reset-css';
import '@/assets/scss/global.scss';

const app = createApp(App)

export default app;

app
  .use(helpers)
  .use(router)
  .mount('#app')

app.config.performance = process.env.NODE_ENV !== 'production';