import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-g-e-n-приказ-о-у-ц', 'Unit | Model | i-i-s-g-e-n-приказ-о-у-ц', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
