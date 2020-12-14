import { reactive, ref } from "vue";

const test = ref('测试');

const setupConfig = {
  test
};

export default reactive(setupConfig);