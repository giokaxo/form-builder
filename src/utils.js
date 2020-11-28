import { FORM_CONTROL_TYPES } from '@/constants';
import IdGenerator from './IdGenerator';

/**
 * Factory function for  form control
 *
 * @param {string} type
 * @returns {object}
 */
export const formControlFactory = type => {
  switch (type) {
    case FORM_CONTROL_TYPES.INPUT:
      return {
        id: IdGenerator.get(),
        component: 'InputBasic',
        value: '',
        type: 'text',
      };
    case FORM_CONTROL_TYPES.CHECKBOX:
      return {
        id: IdGenerator.get(),
        component: 'CheckboxBasic',
        value: '',
        checked: false,
      };
    case FORM_CONTROL_TYPES.DROPDOWN:
      return {
        id: IdGenerator.get(),
        component: 'DropdownBasic',
        values: [],
      };
    default:
      throw new Error('Invalid Form Control type');
  }
};
