<template>
  <Wrapper @preview="togglePreview()" @remove="remove()">
    <div class="row input-basic">
      <div class="col-12 mb-3" v-if="!preview">
        <label class="mr-2">
          Type:
          <select class="form-control" v-model="input.type">
            <option v-for="type in INPUT_TYPES" :key="type" :value="type"> {{ type }} </option>
          </select>
        </label>
        <label class="mr-2">
          Label:
          <input type="text" class="form-control" v-model="input.label" />
        </label>
        <label class="mr-2">
          Placeholder:
          <input type="text" class="form-control" v-model="input.placeholder" />
        </label>
        <label class="mr-2">
          Name:
          <input type="text" class="form-control" v-model="input.name" />
        </label>
      </div>

      <div class="input-basic-preview col-12" v-else>
        <label class="preview__label">
          {{ input.label }}
        </label>
        <input class="form-control" :type="input.type" :name="input.name" :placeholder="input.placeholder" />
      </div>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/FormBuilder/FormControls/Wrapper.vue';
import FormControl from '@/mixins/FormControl';

const INPUT_TYPES = ['text', 'number', 'tel', 'color', 'date', 'email', 'file', 'image', 'password', 'range', 'url', 'week'];

export default {
  name: 'InputBasic',
  components: {
    Wrapper,
  },
  mixins: [FormControl],
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
  data() {
    return {
      INPUT_TYPES,
      input: {
        name: '',
        label: '',
        placeholder: '',
        type: 'text',
      },
    };
  },
};
</script>

<style lang="scss">
.input-basic {
}

.input-basic-preview {
  &__label {
    height: 30px;
  }
}
</style>
