<template>
  <div class="home">
    {{test}}
    <img alt="Vue logo" src="~@/assets/images/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import setupConfig from '@/setup/home';

export default defineComponent({
  name: 'Home',
  setup() {
    return setupConfig
  },
  mounted() {
    this.$loading('hide')

    setTimeout(() => {
      this.$loading('hide');
    }, 1000)
  }
});
</script>
