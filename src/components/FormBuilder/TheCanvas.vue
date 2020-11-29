<template>
  <div :class="`canvas canvas--${size} px-3 py-4`">
    <h4 class="text-center font-weight-normal" v-if="formControls.length === 0">
      There is no form controls yet, <br />
      Press <strong>Add</strong> button and start building form.
    </h4>
    <Draggable v-model="formControls" handle=".control-wrapper__button--handle">
      <transition-group>
        <component v-for="item in formControls" :key="item.id" :is="item.component" v-bind="getAttrs(item)" @remove="removeFormControl(item.id)" />
      </transition-group>
    </Draggable>
    <InsertButton @insert="appendComponent($event)" />
  </div>
</template>

<script>
import Draggable from 'vuedraggable';

import { CANVAS_SIZES } from '@/constants';
import { formControlFactory } from '@/utils';

import InsertButton from '@/components/FormBuilder/InsertButton.vue';

const InputBasic = () => import('@/components/FormBuilder/FormControls/InputBasic.vue');
const CheckboxBasic = () => import('@/components/FormBuilder/FormControls/CheckboxBasic.vue');
const DropdownBasic = () => import('@/components/FormBuilder/FormControls/DropdownBasic.vue');

export default {
  name: 'TheCanvas',
  components: {
    Draggable,
    InsertButton,
    InputBasic,
    CheckboxBasic,
    DropdownBasic,
  },
  data() {
    return {
      formControls: [],
    };
  },
  props: {
    size: {
      type: String,
      validator(value) {
        return Object.values(CANVAS_SIZES).includes(value);
      },
    },
  },
  methods: {
    /**
     * Add new component to
     * formcontrols list
     *
     * @param {string}
     * @returns {void}
     */
    appendComponent(type) {
      this.formControls.push(formControlFactory(type));
    },
    /**
     * Get filtered attributes object
     * to pass props
     *
     * @param {object} item
     * @returns {object}
     */
    getAttrs(item) {
      const predefinedAttrs = ['component', 'id'];
      return Object.keys(item)
        .filter(key => !predefinedAttrs.includes(key))
        .reduce((obj, key) => ({ ...obj, [key]: item[key] }), {});
    },
    /**
     * Remove form control
     * from form control list
     *
     * @param {number} itemId
     * @returns {void}
     */
    removeFormControl(itemId) {
      this.formControls = this.formControls.filter(({ id }) => id !== itemId);
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
