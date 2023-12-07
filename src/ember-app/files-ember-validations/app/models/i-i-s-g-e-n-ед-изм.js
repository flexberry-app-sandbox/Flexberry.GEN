import {
  defineNamespace,
  Model as ЕдИзмMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-ед-изм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдИзмMixin, {
});

defineNamespace(Model);

export default Model;
