import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ЕдИзмMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-ед-изм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдИзмMixin, Validations, {
});

export default Model;
