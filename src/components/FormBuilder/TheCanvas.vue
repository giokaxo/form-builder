<template>
  <div :class="`canvas canvas--${size}`"></div>
</template>

<script>
import { CANVAS_SIZES } from '@/constants';

export default {
  name: 'TheCanvas',
  props: {
    size: {
      type: String,
      validator(value) {
        return Object.values(CANVAS_SIZES).includes(value);
      },
    },
  },
};
</script>

<style lang="scss">
.canvas {
  transition: all var(--transition-duration);
  box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &--a3 {
    width: 297mm;
    height: 420mm;
  }

  &--a4 {
    width: 210mm;
    height: 297mm;
  }

  &--letter {
    width: 215.9mm;
    height: 279.4mm;
  }
}
</style>
