import { Serializer as ДанныеОргSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-данные-орг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДанныеОргSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
