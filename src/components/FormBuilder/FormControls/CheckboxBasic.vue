<template>
  <Wrapper @remove="remove()" @preview="togglePreview()">
    <div class="row checkbox-basic">
      <div class="col-12 mb-3" v-if="!preview">
        <label class="mr-2">
          Name:
          <input type="text" class="form-control" v-model="input.name" />
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
            <hr />
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-secondary text-capitalize" @click="addOption()">add option</button>
          </div>
        </div>
      </div>

      <div class="input-basic-preview col-12" v-else>
        <div class="form-group form-check" v-for="option in input.options" :key="option.id">
          <input type="checkbox" :name="input.name" class="form-check-input" :id="`checkbox-${option.id}`" />
          <label class="form-check-label" :for="`checkbox-${option.id}`">{{ option.label }}</label>
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/FormBuilder/FormControls/Wrapper.vue';

import FormControl from '@/mixins/FormControl';
import HasOptions from '@/mixins/HasOptions';

export default {
  name: 'CheckboxBasic',
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
