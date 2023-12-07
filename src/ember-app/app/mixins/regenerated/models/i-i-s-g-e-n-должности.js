import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наименование: DS.attr('string'),
  обязанности: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-g-e-n-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-g-e-n-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  обязанности: {
    descriptionKey: 'models.i-i-s-g-e-n-должности.validations.обязанности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-g-e-n-должности', {
    наименование: attr('Наименование', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    iDДолжности: attr('I d должности', { index: 2 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-g-e-n-должности', {
    наименование: attr('Наименование', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    iDДолжности: attr('I d должности', { index: 2 })
  });
};
