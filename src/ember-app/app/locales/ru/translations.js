import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
