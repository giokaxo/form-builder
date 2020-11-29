export default {
  data() {
    return {
      preview: false,
    };
  },
  methods: {
    /**
     * Toggle preview value
     *
     * @returns {void}
     */
    togglePreview() {
      this.preview = !this.preview;
    },
    /**
     * Emit remove event
     *
     * @emits {Event}
     * @returns {void}
     */
    remove() {
      this.$emit('remove');
    },
  },
};
