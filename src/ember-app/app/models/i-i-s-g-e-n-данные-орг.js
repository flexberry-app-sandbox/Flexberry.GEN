import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ДанныеОргMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-данные-орг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДанныеОргMixin, Validations, {
});

export default Model;
