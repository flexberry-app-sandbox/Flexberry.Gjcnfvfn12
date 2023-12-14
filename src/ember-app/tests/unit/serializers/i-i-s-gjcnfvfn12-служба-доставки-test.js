import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gjcnfvfn12-служба-доставки', 'Unit | Serializer | i-i-s-gjcnfvfn12-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gjcnfvfn12-служба-доставки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-gjcnfvfn12-оплата',
    'transform:i-i-s-gjcnfvfn12-состояние',
    'transform:i-i-s-gjcnfvfn12-статус',
    'transform:i-i-s-gjcnfvfn12-статусы',

    'model:i-i-s-gjcnfvfn12-логистика',
    'model:i-i-s-gjcnfvfn12-пользователь',
    'model:i-i-s-gjcnfvfn12-постамат',
    'model:i-i-s-gjcnfvfn12-посылка',
    'model:i-i-s-gjcnfvfn12-служба-доставки',
    'model:i-i-s-gjcnfvfn12-транзакция',
    'model:i-i-s-gjcnfvfn12-хранение',
    'model:i-i-s-gjcnfvfn12-ячейка',
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
