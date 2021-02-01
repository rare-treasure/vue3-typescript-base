import { camelCase, upperFirst } from "lodash-es";
import { App } from "vue";
import { thousandthPercentile } from "./verification";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { selfAdaption } = require('./variables');

export const computedPxTVw = (size: number) => {
  return selfAdaption ? size / 3840 * window.innerWidth : size;
}

export const computedPxTVh = (size: number) => {
  return selfAdaption ? size / 2160 * window.innerHeight : size;
}

export const computedThousandthNum = (num: number | string) => {
  return (num + '').replace(thousandthPercentile, '$&,');
}

// 自动注册组件
export function autoRegister(components: __WebpackModuleApi.RequireContext, app: App) {
  components.keys().forEach((fileName) => {
    const config = components(fileName);

    console.log(fileName)

    try {
      const componentName = upperFirst(camelCase(config.default.name));


      if (componentName) {
        app.component(componentName, config.default || config);
      } else {
        app.component(config.default || config);
      }
    } catch (e) {
      console.error(e);
    }
  });
}