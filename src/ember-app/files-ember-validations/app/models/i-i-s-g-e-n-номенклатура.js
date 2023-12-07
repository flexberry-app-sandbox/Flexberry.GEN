import {
  defineNamespace,
  Model as НоменклатураMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-номенклатура';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменклатураMixin, {
});

defineNamespace(Model);

export default Model;
