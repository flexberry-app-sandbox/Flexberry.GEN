import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ПланПродажMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-план-продаж';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланПродажMixin, Validations, {
});

export default Model;
