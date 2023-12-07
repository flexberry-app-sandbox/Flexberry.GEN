import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТабТоварыMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-таб-товары';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабТоварыMixin, Validations, {
});

export default Model;
