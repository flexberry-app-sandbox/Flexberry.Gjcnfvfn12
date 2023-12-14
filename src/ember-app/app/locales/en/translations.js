import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGjcnfvfn12ПользовательLForm from './forms/i-i-s-gjcnfvfn12-пользователь-l';
import IISGjcnfvfn12ПостаматLForm from './forms/i-i-s-gjcnfvfn12-постамат-l';
import IISGjcnfvfn12СлужбаДоставкиLForm from './forms/i-i-s-gjcnfvfn12-служба-доставки-l';
import IISGjcnfvfn12ТранзакцияLForm from './forms/i-i-s-gjcnfvfn12-транзакция-l';
import IISGjcnfvfn12ХранениеLForm from './forms/i-i-s-gjcnfvfn12-хранение-l';
import IISGjcnfvfn12ПользовательEForm from './forms/i-i-s-gjcnfvfn12-пользователь-e';
import IISGjcnfvfn12ПостаматEForm from './forms/i-i-s-gjcnfvfn12-постамат-e';
import IISGjcnfvfn12СлужбаДоставкиEForm from './forms/i-i-s-gjcnfvfn12-служба-доставки-e';
import IISGjcnfvfn12ТранзакцияEForm from './forms/i-i-s-gjcnfvfn12-транзакция-e';
import IISGjcnfvfn12ХранениеEForm from './forms/i-i-s-gjcnfvfn12-хранение-e';
import IISGjcnfvfn12ЛогистикаModel from './models/i-i-s-gjcnfvfn12-логистика';
import IISGjcnfvfn12ПользовательModel from './models/i-i-s-gjcnfvfn12-пользователь';
import IISGjcnfvfn12ПостаматModel from './models/i-i-s-gjcnfvfn12-постамат';
import IISGjcnfvfn12ПосылкаModel from './models/i-i-s-gjcnfvfn12-посылка';
import IISGjcnfvfn12СлужбаДоставкиModel from './models/i-i-s-gjcnfvfn12-служба-доставки';
import IISGjcnfvfn12ТранзакцияModel from './models/i-i-s-gjcnfvfn12-транзакция';
import IISGjcnfvfn12ХранениеModel from './models/i-i-s-gjcnfvfn12-хранение';
import IISGjcnfvfn12ЯчейкаModel from './models/i-i-s-gjcnfvfn12-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gjcnfvfn12-логистика': IISGjcnfvfn12ЛогистикаModel,
    'i-i-s-gjcnfvfn12-пользователь': IISGjcnfvfn12ПользовательModel,
    'i-i-s-gjcnfvfn12-постамат': IISGjcnfvfn12ПостаматModel,
    'i-i-s-gjcnfvfn12-посылка': IISGjcnfvfn12ПосылкаModel,
    'i-i-s-gjcnfvfn12-служба-доставки': IISGjcnfvfn12СлужбаДоставкиModel,
    'i-i-s-gjcnfvfn12-транзакция': IISGjcnfvfn12ТранзакцияModel,
    'i-i-s-gjcnfvfn12-хранение': IISGjcnfvfn12ХранениеModel,
    'i-i-s-gjcnfvfn12-ячейка': IISGjcnfvfn12ЯчейкаModel
  },

  'application-name': 'Gjcnfvfn12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gjcnfvfn12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gjcnfvfn12',
          title: 'Gjcnfvfn12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gjcnfvfn12: {
          caption: 'Gjcnfvfn12',
          title: 'Gjcnfvfn12',
          'i-i-s-gjcnfvfn12-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-gjcnfvfn12-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-gjcnfvfn12-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-gjcnfvfn12-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-gjcnfvfn12-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gjcnfvfn12-пользователь-l': IISGjcnfvfn12ПользовательLForm,
    'i-i-s-gjcnfvfn12-постамат-l': IISGjcnfvfn12ПостаматLForm,
    'i-i-s-gjcnfvfn12-служба-доставки-l': IISGjcnfvfn12СлужбаДоставкиLForm,
    'i-i-s-gjcnfvfn12-транзакция-l': IISGjcnfvfn12ТранзакцияLForm,
    'i-i-s-gjcnfvfn12-хранение-l': IISGjcnfvfn12ХранениеLForm,
    'i-i-s-gjcnfvfn12-пользователь-e': IISGjcnfvfn12ПользовательEForm,
    'i-i-s-gjcnfvfn12-постамат-e': IISGjcnfvfn12ПостаматEForm,
    'i-i-s-gjcnfvfn12-служба-доставки-e': IISGjcnfvfn12СлужбаДоставкиEForm,
    'i-i-s-gjcnfvfn12-транзакция-e': IISGjcnfvfn12ТранзакцияEForm,
    'i-i-s-gjcnfvfn12-хранение-e': IISGjcnfvfn12ХранениеEForm
  },

});

export default translations;
