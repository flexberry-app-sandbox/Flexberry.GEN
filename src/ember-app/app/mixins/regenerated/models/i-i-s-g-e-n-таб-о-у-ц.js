import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  датаНач: DS.attr('string'),
  датаОконч: DS.attr('string'),
  номерСтроки: DS.attr('number'),
  цена: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-g-e-n-номенклатура', { inverse: null, async: false })
});

export let ValidationRules = {
  датаНач: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-о-у-ц.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-о-у-ц.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-о-у-ц.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-о-у-ц.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-о-у-ц.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
