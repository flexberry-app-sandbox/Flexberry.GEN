import { Serializer as ТабМенеджерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-таб-менеджер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТабМенеджерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
