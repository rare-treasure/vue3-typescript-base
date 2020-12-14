<template>
  <svg class="svg-icon" :class="className" :style="sizeStyles" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang='ts'>
import { computedPxTVw } from '@/utils';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: [String, Number]
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.icon}`
    })

    const sizeStyles = computed(() => {
      const haveSize = props.size ? `${computedPxTVw(props.size as number)}px` : false;

      return {
        fontSize: haveSize,
        width: haveSize,
        height: haveSize,
      };
    })

    return {
      iconName,
      sizeStyles
    }
  },
});
</script>

<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  font-size: vw(32px);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
