<template>
  <div class="control-wrapper d-flex p-2 align-items-start">
    <button class="control-wrapper__button control-wrapper__button--handle d-flex flex-center border-0 bg-transparent cursor-grab px-2 mr-2">
      <img class="control-wrapper__handle" src="@/assets/images/grid-icon.png" alt="Move to rearrange" title="Move to rearrange" />
    </button>

    <div class="flex-grow-1">
      <slot />
    </div>

    <div class="d-flex">
      <button class="control-wrapper__button d-flex flex-center border-0 bg-transparent ml-auto px-2" @click="togglePreview()">
        <strong>&#9881;</strong>
      </button>
      <button class="control-wrapper__button d-flex flex-center border-0 bg-transparent ml-auto px-2" @click="remove()">
        <strong>&times;</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  methods: {
    /**
     * Emit remove event
     *
     * @emis {Event}
     * @returns {void}
     */
    remove() {
      this.$emit('remove');
    },
    /**
     * Emit preview event
     *
     * @emis {Event}
     * @returns {void}
     */
    togglePreview() {
      this.$emit('preview');
    },
  },
};
</script>

<style lang="scss">
.control-wrapper {
  border-bottom: 1px dashed var(--secondary);

  &__button {
    opacity: 0;
    transition: opacity var(--transition-duration);
  }

  &:hover &__button {
    opacity: 1;
  }

  &__handle {
    width: 10px;
    height: 10px;
  }
}
</style>
