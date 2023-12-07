import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выручка: DS.attr('number'),
  датаНачала: DS.attr('string'),
  датаОконч: DS.attr('string'),
  дИРОтСотр: DS.attr('number'),
  комРасходы: DS.attr('number'),
  номерСтроки: DS.attr('number'),
  постНалОбяз: DS.attr('number'),
  прочДоходы: DS.attr('number'),
  прочНалОбяз: DS.attr('number'),
  прочРасходы: DS.attr('number'),
  себПродаж: DS.attr('number'),
  сумПродаж: DS.attr('number'),
  управРасходы: DS.attr('number'),
  данныеОрг: DS.belongsTo('i-i-s-g-e-n-данные-орг', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-g-e-n-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  выручка: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.выручка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дИРОтСотр: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.дИРОтСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комРасходы: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.комРасходы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  постНалОбяз: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.постНалОбяз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прочДоходы: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.прочДоходы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прочНалОбяз: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.прочНалОбяз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прочРасходы: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.прочРасходы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  себПродаж: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.себПродаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумПродаж: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.сумПродаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  управРасходы: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.управРасходы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  данныеОрг: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.данныеОрг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-g-e-n-отчет-ф-р.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетФРE', 'i-i-s-g-e-n-отчет-ф-р', {
    выручка: attr('Выручка', { index: 0 }),
    прочРасходы: attr('Проч расходы', { index: 1 }),
    постНалОбяз: attr('Пост нал обяз', { index: 2 }),
    прочДоходы: attr('Проч доходы', { index: 3 }),
    дИРОтСотр: attr('Д и р от сотр', { index: 4 }),
    сумПродаж: attr('Сум продаж', { index: 5 }),
    себПродаж: attr('Себ продаж', { index: 6 }),
    прочНалОбяз: attr('Проч нал обяз', { index: 7 }),
    управРасходы: attr('Управ расходы', { index: 8 }),
    датаОконч: attr('Дата оконч', { index: 9 }),
    комРасходы: attr('Ком расходы', { index: 10 }),
    датаНачала: attr('Дата начала', { index: 11 }),
    номерСтроки: attr('Номер строки', { index: 12 }),
    данныеОрг: belongsTo('i-i-s-g-e-n-данные-орг', 'Данные орг', {
      email: attr('Email', { index: 14, hidden: true })
    }, { index: 13, displayMemberPath: 'email' }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 16, hidden: true })
    }, { index: 15, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОтчетФРL', 'i-i-s-g-e-n-отчет-ф-р', {
    выручка: attr('Выручка', { index: 0 }),
    прочРасходы: attr('Проч расходы', { index: 1 }),
    постНалОбяз: attr('Пост нал обяз', { index: 2 }),
    прочДоходы: attr('Проч доходы', { index: 3 }),
    дИРОтСотр: attr('Д и р от сотр', { index: 4 }),
    сумПродаж: attr('Сум продаж', { index: 5 }),
    себПродаж: attr('Себ продаж', { index: 6 }),
    прочНалОбяз: attr('Проч нал обяз', { index: 7 }),
    управРасходы: attr('Управ расходы', { index: 8 }),
    датаОконч: attr('Дата оконч', { index: 9 }),
    комРасходы: attr('Ком расходы', { index: 10 }),
    датаНачала: attr('Дата начала', { index: 11 }),
    номерСтроки: attr('Номер строки', { index: 12 }),
    данныеОрг: belongsTo('i-i-s-g-e-n-данные-орг', 'Email', {
      email: attr('Email', { index: 13 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 14 })
    }, { index: -1, hidden: true })
  });
};
