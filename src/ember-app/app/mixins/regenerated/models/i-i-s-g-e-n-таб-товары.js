import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабТоварыE', 'i-i-s-g-e-n-таб-товары', {
    номерСтроки: attr('Номер строки', { index: 0 }),
    планНаМесяц: attr('План на месяц', { index: 1 }),
    итогоЗаГод: attr('Итого за год', { index: 2 }),
    размерПрод: attr('Размер прод', { index: 3 }),
    наимМесяца: attr('Наим месяца', { index: 4 }),
    номенклатура: belongsTo('i-i-s-g-e-n-номенклатура', 'Номенклатура', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТабТоварыL', 'i-i-s-g-e-n-таб-товары', {
    номерСтроки: attr('Номер строки', { index: 0 }),
    планНаМесяц: attr('План на месяц', { index: 1 }),
    итогоЗаГод: attr('Итого за год', { index: 2 }),
    размерПрод: attr('Размер прод', { index: 3 }),
    наимМесяца: attr('Наим месяца', { index: 4 }),
    номенклатура: belongsTo('i-i-s-g-e-n-номенклатура', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
