import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТабОУЦMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-таб-о-у-ц';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабОУЦMixin, Validations, {
});

export default Model;
