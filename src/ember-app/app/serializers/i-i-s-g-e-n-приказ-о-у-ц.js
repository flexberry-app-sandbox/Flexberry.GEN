import { Serializer as ПриказОУЦSerializer } from
  '../mixins/regenerated/serializers/i-i-s-g-e-n-приказ-о-у-ц';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриказОУЦSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
