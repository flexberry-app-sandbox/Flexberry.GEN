import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDСотрудника: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-g-e-n-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотрудника: {
    descriptionKey: 'models.i-i-s-g-e-n-сотрудники.validations.iDСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-g-e-n-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-g-e-n-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-g-e-n-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
