<template>
  <div class="d-flex flex-center position-relative mx-auto" v-click-outside="hideList">
    <button class="insert-button mt-3 mx-auto p-2 rounded-lg border-0" @click="toggleList()">
      <img class="insert-button__icon" :src="require('@/assets/images/plus-icon.svg')" />
    </button>
    <transition name="fade">
      <ul v-show="showList" class="insert-button__list position-absolute p-0 list-style-none">
        <li class="control-list-item" v-for="item in componentTypes" :key="item.type">
          <button class="bg-transparent d-flex align-items-center w-100 px-3 py-1 border-0 text-capitalize" @click="addComponent(item.type)">
            <img class="control-list-item__icon mr-2" :src="item.icon" :title="item.name" :alt="item.name" />
            {{ item.name }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import clickOutside from 'vue-click-outside';

import { FORM_CONTROL_TYPES } from '@/constants';

export default {
  name: 'InsertButton',
  directives: {
    clickOutside,
  },
  data() {
    return {
      showList: false,
      componentTypes: [
        {
          type: FORM_CONTROL_TYPES.INPUT,
          name: 'Input',
          icon: require('@/assets/images/controls/input.png'),
        },
        {
          type: FORM_CONTROL_TYPES.CHECKBOX,
          name: 'Checkbox',
          icon: require('@/assets/images/controls/checkbox.png'),
        },
        {
          type: FORM_CONTROL_TYPES.DROPDOWN,
          name: 'Dropdown',
          icon: require('@/assets/images/controls/dropdown.png'),
        },
      ],
    };
  },
  methods: {
    /**
     * Toggle showList value
     *
     * @returns {void}
     */
    toggleList() {
      this.showList = !this.showList;
    },
    /**
     * Explicitly hide list
     *
     * @returns {void}
     */
    hideList() {
      this.showList = false;
    },
    /**
     * Insert new block
     *
     * @param {string} type
     * @returns {void}
     */
    addComponent(type) {
      this.hideList();
      this.$emit('insert', type);
    },
  },
};
</script>

<style lang="scss">
.insert-button {
  background-color: rgb(206 206 206 / 37%);
  transition: background-color var(--transition-duration);

  &:hover,
  &:focus {
    outline: none;
    background-color: #cecece;
  }

  &__icon {
    width: 25px;
    height: 25px;
  }

  &__list {
    top: calc(100% + 10px);
    left: 50%;
    border: 1px solid var(--secondary);
    transform: translateX(-50%);

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: -7px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid var(--secondary);
      transform: translateX(-50%);
    }
  }
}

.control-list-item {
  transition: background-color var(--transition-duration);

  &:hover {
    background-color: #cecece;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--secondary);
  }

  &__icon {
    width: 15px;
    height: 15px;
    object-fit: contian;
  }
}
</style>
