import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименвоание: DS.attr('string'),
  номер: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  логистика: DS.hasMany('i-i-s-gjcnfvfn12-логистика', { inverse: 'службаДоставки', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-gjcnfvfn12-служба-доставки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименвоание: {
    descriptionKey: 'models.i-i-s-gjcnfvfn12-служба-доставки.validations.наименвоание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-gjcnfvfn12-служба-доставки.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-gjcnfvfn12-служба-доставки.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-gjcnfvfn12-служба-доставки.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СлужбаДоставкиE', 'i-i-s-gjcnfvfn12-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименвоание: attr('Наименвоание', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    логистика: hasMany('i-i-s-gjcnfvfn12-логистика', 'Логистика', {
      номер: attr('Номер', { index: 0 }),
      состояние: attr('Состояние', { index: 1 }),
      информация: attr('Информация', { index: 2 })
    })
  });

  modelClass.defineProjection('СлужбаДоставкиL', 'i-i-s-gjcnfvfn12-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименвоание: attr('Наименвоание', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 })
  });
};
