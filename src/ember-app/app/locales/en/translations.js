import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGENДанныеОргModel from './models/i-i-s-g-e-n-данные-орг';
import IISGENДолжностиModel from './models/i-i-s-g-e-n-должности';
import IISGENЕдИзмModel from './models/i-i-s-g-e-n-ед-изм';
import IISGENНоменклатураModel from './models/i-i-s-g-e-n-номенклатура';
import IISGENОтчетФРModel from './models/i-i-s-g-e-n-отчет-ф-р';
import IISGENПланПродажModel from './models/i-i-s-g-e-n-план-продаж';
import IISGENПриказОУЦModel from './models/i-i-s-g-e-n-приказ-о-у-ц';
import IISGENСотрудникиModel from './models/i-i-s-g-e-n-сотрудники';
import IISGENТабМенеджерModel from './models/i-i-s-g-e-n-таб-менеджер';
import IISGENТабОУЦModel from './models/i-i-s-g-e-n-таб-о-у-ц';
import IISGENТабТоварыModel from './models/i-i-s-g-e-n-таб-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-g-e-n-данные-орг': IISGENДанныеОргModel,
    'i-i-s-g-e-n-должности': IISGENДолжностиModel,
    'i-i-s-g-e-n-ед-изм': IISGENЕдИзмModel,
    'i-i-s-g-e-n-номенклатура': IISGENНоменклатураModel,
    'i-i-s-g-e-n-отчет-ф-р': IISGENОтчетФРModel,
    'i-i-s-g-e-n-план-продаж': IISGENПланПродажModel,
    'i-i-s-g-e-n-приказ-о-у-ц': IISGENПриказОУЦModel,
    'i-i-s-g-e-n-сотрудники': IISGENСотрудникиModel,
    'i-i-s-g-e-n-таб-менеджер': IISGENТабМенеджерModel,
    'i-i-s-g-e-n-таб-о-у-ц': IISGENТабОУЦModel,
    'i-i-s-g-e-n-таб-товары': IISGENТабТоварыModel
  },

  'application-name': '',

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
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
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

  },

});

export default translations;
