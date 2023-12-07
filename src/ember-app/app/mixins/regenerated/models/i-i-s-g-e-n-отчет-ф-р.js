import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

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
