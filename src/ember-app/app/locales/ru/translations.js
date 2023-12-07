import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGENДанныеОргLForm from './forms/i-i-s-g-e-n-данные-орг-l';
import IISGENДолжностиLForm from './forms/i-i-s-g-e-n-должности-l';
import IISGENЕдИзмLForm from './forms/i-i-s-g-e-n-ед-изм-l';
import IISGENНоменклатураLForm from './forms/i-i-s-g-e-n-номенклатура-l';
import IISGENОтчетФРLForm from './forms/i-i-s-g-e-n-отчет-ф-р-l';
import IISGENПланПродажLForm from './forms/i-i-s-g-e-n-план-продаж-l';
import IISGENПриказОУЦLForm from './forms/i-i-s-g-e-n-приказ-о-у-ц-l';
import IISGENСотрудникиLForm from './forms/i-i-s-g-e-n-сотрудники-l';
import IISGENТабМенеджерLForm from './forms/i-i-s-g-e-n-таб-менеджер-l';
import IISGENТабОУЦLForm from './forms/i-i-s-g-e-n-таб-о-у-ц-l';
import IISGENТабТоварыLForm from './forms/i-i-s-g-e-n-таб-товары-l';
import IISGENДанныеОргEForm from './forms/i-i-s-g-e-n-данные-орг-e';
import IISGENДолжностиEForm from './forms/i-i-s-g-e-n-должности-e';
import IISGENЕдИзмEForm from './forms/i-i-s-g-e-n-ед-изм-e';
import IISGENНоменклатураEForm from './forms/i-i-s-g-e-n-номенклатура-e';
import IISGENОтчетФРEForm from './forms/i-i-s-g-e-n-отчет-ф-р-e';
import IISGENПланПродажEForm from './forms/i-i-s-g-e-n-план-продаж-e';
import IISGENПриказОУЦEForm from './forms/i-i-s-g-e-n-приказ-о-у-ц-e';
import IISGENСотрудникиEForm from './forms/i-i-s-g-e-n-сотрудники-e';
import IISGENТабМенеджерEForm from './forms/i-i-s-g-e-n-таб-менеджер-e';
import IISGENТабОУЦEForm from './forms/i-i-s-g-e-n-таб-о-у-ц-e';
import IISGENТабТоварыEForm from './forms/i-i-s-g-e-n-таб-товары-e';
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

  'application-name': 'GEN',

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
        'application-name': 'GEN',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'GEN',
          title: 'GEN'
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
        'g-e-n': {
          caption: 'GEN',
          title: 'GEN',
          'i-i-s-g-e-n-ед-изм-l': {
            caption: 'Ед изм',
            title: ''
          },
          'i-i-s-g-e-n-приказ-о-у-ц-l': {
            caption: 'Приказ ОУЦ',
            title: ''
          },
          'i-i-s-g-e-n-таб-товары-l': {
            caption: 'Таб товары',
            title: ''
          },
          'i-i-s-g-e-n-отчет-ф-р-l': {
            caption: 'Отчет ФР',
            title: ''
          },
          'i-i-s-g-e-n-план-продаж-l': {
            caption: 'План продаж',
            title: ''
          },
          'i-i-s-g-e-n-таб-менеджер-l': {
            caption: 'Таб менеджер',
            title: ''
          },
          'i-i-s-g-e-n-таб-о-у-ц-l': {
            caption: 'Таб ОУЦ',
            title: ''
          },
          'i-i-s-g-e-n-данные-орг-l': {
            caption: 'Данные орг',
            title: ''
          },
          'i-i-s-g-e-n-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-g-e-n-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-g-e-n-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
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
    'i-i-s-g-e-n-данные-орг-l': IISGENДанныеОргLForm,
    'i-i-s-g-e-n-должности-l': IISGENДолжностиLForm,
    'i-i-s-g-e-n-ед-изм-l': IISGENЕдИзмLForm,
    'i-i-s-g-e-n-номенклатура-l': IISGENНоменклатураLForm,
    'i-i-s-g-e-n-отчет-ф-р-l': IISGENОтчетФРLForm,
    'i-i-s-g-e-n-план-продаж-l': IISGENПланПродажLForm,
    'i-i-s-g-e-n-приказ-о-у-ц-l': IISGENПриказОУЦLForm,
    'i-i-s-g-e-n-сотрудники-l': IISGENСотрудникиLForm,
    'i-i-s-g-e-n-таб-менеджер-l': IISGENТабМенеджерLForm,
    'i-i-s-g-e-n-таб-о-у-ц-l': IISGENТабОУЦLForm,
    'i-i-s-g-e-n-таб-товары-l': IISGENТабТоварыLForm,
    'i-i-s-g-e-n-данные-орг-e': IISGENДанныеОргEForm,
    'i-i-s-g-e-n-должности-e': IISGENДолжностиEForm,
    'i-i-s-g-e-n-ед-изм-e': IISGENЕдИзмEForm,
    'i-i-s-g-e-n-номенклатура-e': IISGENНоменклатураEForm,
    'i-i-s-g-e-n-отчет-ф-р-e': IISGENОтчетФРEForm,
    'i-i-s-g-e-n-план-продаж-e': IISGENПланПродажEForm,
    'i-i-s-g-e-n-приказ-о-у-ц-e': IISGENПриказОУЦEForm,
    'i-i-s-g-e-n-сотрудники-e': IISGENСотрудникиEForm,
    'i-i-s-g-e-n-таб-менеджер-e': IISGENТабМенеджерEForm,
    'i-i-s-g-e-n-таб-о-у-ц-e': IISGENТабОУЦEForm,
    'i-i-s-g-e-n-таб-товары-e': IISGENТабТоварыEForm
  },

});

export default translations;
