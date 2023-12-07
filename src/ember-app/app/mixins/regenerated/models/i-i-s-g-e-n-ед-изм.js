import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  единица: DS.attr('string'),
  номерСтроки: DS.attr('number')
});

export let ValidationRules = {
  единица: {
    descriptionKey: 'models.i-i-s-g-e-n-ед-изм.validations.единица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-ед-изм.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};
