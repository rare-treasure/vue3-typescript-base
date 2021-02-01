import { App } from 'vue';
import { uniqueId } from 'lodash-es';
import { ILoadingOptions, ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import tooltip from '@/directives/tooltip';
import Components from '@/components'

import './permission'
import './svg-icon'

interface Loading {
  (options: ILoadingOptions): ILoadingInstance;
  (text: string): ILoadingInstance;
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    uniqueId: typeof uniqueId;
    log: typeof console.log;
    $loading: Loading;
  }
}

const createLoading = (loading: Loading) => {
  let loading_: ILoadingInstance;

  const $loading = (options: ILoadingOptions & { hide?: boolean }) => {
    if (typeof options === 'string') {
      options = {
        text: options
      }
    }

    if((options.text === 'hide' || options.hide) && loading_) {
      loading_?.close();

      return {} as ILoadingInstance;
    }

    loading_ = loading(options)

    return loading_ ?? {};
  }

  return Object.keys($loading).length ? $loading : (() => {
    return
  });
}

export default {
  install(app: App) {
    const loading = app.config.globalProperties.$loading as Loading;
    const $loading = createLoading(loading);

    app.config.globalProperties.log = console.log;
    app.config.globalProperties.uniqueId = uniqueId;
    app.config.globalProperties.$loading = $loading;

    app.use(Components).directive('tooltip', tooltip)
  }
}
