<template>
  <div class="header-controls position-fixed px-3">
    <ul class="d-flex h-100 align-items-center p-0 m-0 list-style-none">
      <li class="header-control" v-for="(value, key) in CANVAS_SIZES" :key="key">
        <button
          class="btn btn-sm text-capitalize mr-2"
          :class="{
            [`btn-${canvasSize === value ? 'secondary' : 'light'}`]: true,
          }"
          @click="setCanvasSize(value)"
        >
          {{ value }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import { CANVAS_SIZES } from '@/constants';

export default {
  name: 'TheHeaderControls',
  data() {
    return {
      CANVAS_SIZES,
    };
  },
  computed: {
    ...mapGetters({
      canvasSize: 'formBuilder/canvasSize',
    }),
  },
  methods: {
    ...mapMutations({
      setCanvasSize: 'formBuilder/SET_CANVAS_SIZE',
    }),
  },
};
</script>

<style lang="scss">
.header-controls {
  top: 0;
  left: 0;
  background-color: #bbb;
  width: 100%;
  height: var(--header-controls-height);
  z-index: 100;
}
</style>
