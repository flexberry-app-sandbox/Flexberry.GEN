import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТабМенеджерMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-таб-менеджер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабМенеджерMixin, Validations, {
});

export default Model;
