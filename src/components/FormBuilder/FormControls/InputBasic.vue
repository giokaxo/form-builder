<template>
  <Wrapper>
    <input type="text" name="name" placeholder="Enter Name" />
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/FormBuilder/FormControls/Wrapper.vue';

const INPUT_TYPES = ['text', 'number', 'tel', 'color', 'date', 'email', 'file', 'image', 'password', 'range', 'url', 'week'];

export default {
  name: 'InputBasic',
  components: {
    Wrapper,
  },
  props: {
    type: {
      type: String,
      default() {
        return 'text';
      },
      validator(value) {
        return INPUT_TYPES.includes(value);
      },
    },
  },
};
</script>
