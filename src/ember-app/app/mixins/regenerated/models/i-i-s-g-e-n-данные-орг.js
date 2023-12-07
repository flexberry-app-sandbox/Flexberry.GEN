import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  иНН: DS.attr('number'),
  наименование: DS.attr('string'),
  номерСтроки: DS.attr('number'),
  оГРН: DS.attr('number'),
  оПФ: DS.attr('string'),
  телефон: DS.attr('number'),
  юрАдрес: DS.attr('string')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСтроки: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.номерСтроки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оПФ: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.оПФ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-g-e-n-данные-орг.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДанныеОргE', 'i-i-s-g-e-n-данные-орг', {
    номерСтроки: attr('Номер строки', { index: 0 }),
    email: attr('Email', { index: 1 }),
    наименование: attr('Наименование', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    оПФ: attr('ОПФ', { index: 6 }),
    юрАдрес: attr('Юр адрес', { index: 7 })
  });

  modelClass.defineProjection('ДанныеОргL', 'i-i-s-g-e-n-данные-орг', {
    номерСтроки: attr('Номер строки', { index: 0 }),
    email: attr('Email', { index: 1 }),
    наименование: attr('Наименование', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    оПФ: attr('ОПФ', { index: 6 }),
    юрАдрес: attr('Юр адрес', { index: 7 })
  });
};
