import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  итогоЗаГод: DS.attr('number'),
  наимМесяца: DS.attr('string'),
  номерСтроки: DS.attr('number'),
  планНаМесяц: DS.attr('number'),
  размерПрод: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-g-e-n-номенклатура', { inverse: null, async: false })
});

export let ValidationRules = {
  итогоЗаГод: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.итогоЗаГод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимМесяца: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.наимМесяца.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  планНаМесяц: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.планНаМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  размерПрод: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.размерПрод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-товары.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
