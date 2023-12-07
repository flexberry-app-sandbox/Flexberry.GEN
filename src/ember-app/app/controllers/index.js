import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.g-e-n.caption'),
          title: i18n.t('forms.application.sitemap.g-e-n.title'),
          children: [{
            link: 'i-i-s-g-e-n-ед-изм-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-ед-изм-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-ед-изм-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-g-e-n-приказ-о-у-ц-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-приказ-о-у-ц-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-приказ-о-у-ц-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-g-e-n-таб-товары-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-товары-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-g-e-n-отчет-ф-р-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-отчет-ф-р-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-отчет-ф-р-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-g-e-n-план-продаж-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-план-продаж-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-план-продаж-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-g-e-n-таб-менеджер-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-менеджер-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-g-e-n-таб-о-у-ц-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-о-у-ц-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-таб-о-у-ц-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-g-e-n-данные-орг-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-данные-орг-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-данные-орг-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-g-e-n-должности-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-g-e-n-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-номенклатура-l.title'),
            children: null
          }, {
            link: 'i-i-s-g-e-n-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.g-e-n.i-i-s-g-e-n-сотрудники-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})