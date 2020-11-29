import IdGenerator from '@/IdGenerator';

export default {
  methods: {
    /**
     * Add new option
     *
     * @returns {void}
     */
    addOption() {
      this.input.options.push({
        id: IdGenerator.get(),
        label: '',
        value: '',
      });
    },
  },
};
