<template>
  <Wrapper @remove="remove()" @preview="togglePreview()">
    <div class="row dropdown-basic">
      <div class="col-12 mb-3" v-if="!preview">
        <label class="mr-2">
          Name:
          <input type="text" class="form-control" v-model="input.name" />
        </label>
        <label class="mr-2">
          Label:
          <input type="text" class="form-control" v-model="input.label" />
        </label>
        <div class="row">
          <div class="col-12 col-md-6 d-flex mb-2" v-for="option in input.options" :key="option.id">
            <label class="w-50 px-1">
              Label:
              <input type="text" class="form-control" v-model="option.label" />
            </label>
            <label class="w-50 px-1">
              Value:
              <input type="text" class="form-control" v-model="option.value" />
            </label>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-secondary text-capitalize" @click="addOption()">add Item</button>
          </div>
        </div>
      </div>
      <div class="col-12" v-else>
        <label class="w-100">
          {{ input.label }}
          <select class="form-control" :name="input.name">
            <option v-for="option in input.options" :key="option.id" :value="option.value">{{ option.label }} </option>
          </select>
        </label>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/FormBuilder/FormControls/Wrapper.vue';

import FormControl from '@/mixins/FormControl';
import HasOptions from '@/mixins/HasOptions';

export default {
  name: 'DropdownBasic',
  mixins: [FormControl, HasOptions],
  components: {
    Wrapper,
  },
  data() {
    return {
      input: {
        name: '',
        label: '',
        options: [],
      },
    };
  },
};
</script>
