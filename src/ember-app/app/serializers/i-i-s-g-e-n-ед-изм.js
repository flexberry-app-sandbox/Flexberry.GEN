import { Serializer as ЕдИзмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-ед-изм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдИзмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
