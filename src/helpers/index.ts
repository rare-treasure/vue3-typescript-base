import { App } from 'vue';
import { uniqueId } from 'lodash-es';

import './svg-icon'

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    uniqueId: typeof uniqueId;
    log: typeof console.log;
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.log = console.log;
    app.config.globalProperties.uniqueId = uniqueId;
  }
}
