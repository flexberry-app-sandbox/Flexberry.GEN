import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  датаСозд: DS.attr('string'),
  номерДок: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-g-e-n-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСозд: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.датаСозд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
