import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ОтчетФРMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-отчет-ф-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетФРMixin, Validations, {
});

export default Model;
