import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gjcnfvfn12-служба-доставки', 'Unit | Model | i-i-s-gjcnfvfn12-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
