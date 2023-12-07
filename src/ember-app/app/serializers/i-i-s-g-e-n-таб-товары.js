import { Serializer as ТабТоварыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-таб-товары';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТабТоварыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
