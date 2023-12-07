import {
  defineNamespace,
  Model as ТабМенеджерMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-таб-менеджер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабМенеджерMixin, {
});

defineNamespace(Model);

export default Model;
