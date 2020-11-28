<template>
  <div class="home container-fluid d-flex flex-column">
    <TheHeaderControls />
    <TheCanvas :size="canvasSize" class="mx-auto" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TheHeaderControls from '@/components/FormBuilder/TheHeaderControls.vue';
import TheCanvas from '@/components/FormBuilder/TheCanvas.vue';

export default {
  name: 'Home',
  components: {
    TheHeaderControls,
    TheCanvas,
  },
  computed: {
    ...mapGetters({
      canvasSize: 'formBuilder/canvasSize',
    }),
  },
};
</script>

<style lang="scss">
.home {
  padding-top: calc(var(--header-controls-height) + 10px);
  min-height: 100vh;
}
</style>
