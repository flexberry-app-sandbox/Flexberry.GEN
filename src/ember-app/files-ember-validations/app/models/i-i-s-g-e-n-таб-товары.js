import {
  defineNamespace,
  Model as ТабТоварыMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-таб-товары';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабТоварыMixin, {
});

defineNamespace(Model);

export default Model;
