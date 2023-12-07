import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСозд: DS.attr('string'),
  номерДок: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-g-e-n-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСозд: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.датаСозд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-g-e-n-приказ-о-у-ц.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриказОУЦE', 'i-i-s-g-e-n-приказ-о-у-ц', {
    датаСозд: attr('Дата созд', { index: 0 }),
    номерДок: attr('Номер док', { index: 1 }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПриказОУЦL', 'i-i-s-g-e-n-приказ-о-у-ц', {
    датаСозд: attr('Дата созд', { index: 0 }),
    номерДок: attr('Номер док', { index: 1 }),
    сотрудники: belongsTo('i-i-s-g-e-n-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
