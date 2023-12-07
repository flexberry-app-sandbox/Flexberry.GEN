import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-g-e-n-отчет-ф-р', 'Unit | Serializer | i-i-s-g-e-n-отчет-ф-р', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-g-e-n-отчет-ф-р',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-g-e-n-данные-орг',
    'model:i-i-s-g-e-n-должности',
    'model:i-i-s-g-e-n-ед-изм',
    'model:i-i-s-g-e-n-номенклатура',
    'model:i-i-s-g-e-n-отчет-ф-р',
    'model:i-i-s-g-e-n-план-продаж',
    'model:i-i-s-g-e-n-приказ-о-у-ц',
    'model:i-i-s-g-e-n-сотрудники',
    'model:i-i-s-g-e-n-таб-менеджер',
    'model:i-i-s-g-e-n-таб-о-у-ц',
    'model:i-i-s-g-e-n-таб-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
