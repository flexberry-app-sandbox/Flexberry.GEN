import {
  defineNamespace,
  Model as ДанныеОргMixin
} from '../mixins/regenerated/models/i-i-s-g-e-n-данные-орг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДанныеОргMixin, {
});

defineNamespace(Model);

export default Model;
