import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  кодПозиции: DS.attr('number'),
  наименование: DS.attr('string'),
  едИзм: DS.belongsTo('i-i-s-g-e-n-ед-изм', { inverse: null, async: false })
});

export let ValidationRules = {
  кодПозиции: {
    descriptionKey: 'models.i-i-s-g-e-n-номенклатура.validations.кодПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-g-e-n-номенклатура.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  едИзм: {
    descriptionKey: 'models.i-i-s-g-e-n-номенклатура.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
