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
  сотрудники: DS.belongsTo('i-i-s-g-e-n-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  итогоЗаГод: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.итогоЗаГод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимМесяца: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.наимМесяца.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  планНаМесяц: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.планНаМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  размерПрод: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.размерПрод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-g-e-n-таб-менеджер.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабМенеджерE', 'i-i-s-g-e-n-таб-менеджер', {
    планНаМесяц: attr('План на месяц', { index: 0 }),
    итогоЗаГод: attr('Итого за год', { index: 1 }),
    номерСтроки: attr('Номер строки', { index: 2 }),
    наимМесяца: attr('Наим месяца', { index: 3 }),
    размерПрод: attr('Размер прод', { index: 4 }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТабМенеджерL', 'i-i-s-g-e-n-таб-менеджер', {
    планНаМесяц: attr('План на месяц', { index: 0 }),
    итогоЗаГод: attr('Итого за год', { index: 1 }),
    номерСтроки: attr('Номер строки', { index: 2 }),
    наимМесяца: attr('Наим месяца', { index: 3 }),
    размерПрод: attr('Размер прод', { index: 4 }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
