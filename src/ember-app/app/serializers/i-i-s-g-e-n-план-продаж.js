import { Serializer as ПланПродажSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-план-продаж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланПродажSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
