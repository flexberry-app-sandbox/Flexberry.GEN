import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-g-e-n-данные-орг-l');
  this.route('i-i-s-g-e-n-данные-орг-e',
  { path: 'i-i-s-g-e-n-данные-орг-e/:id' });
  this.route('i-i-s-g-e-n-данные-орг-e.new',
  { path: 'i-i-s-g-e-n-данные-орг-e/new' });
  this.route('i-i-s-g-e-n-должности-l');
  this.route('i-i-s-g-e-n-должности-e',
  { path: 'i-i-s-g-e-n-должности-e/:id' });
  this.route('i-i-s-g-e-n-должности-e.new',
  { path: 'i-i-s-g-e-n-должности-e/new' });
  this.route('i-i-s-g-e-n-ед-изм-l');
  this.route('i-i-s-g-e-n-ед-изм-e',
  { path: 'i-i-s-g-e-n-ед-изм-e/:id' });
  this.route('i-i-s-g-e-n-ед-изм-e.new',
  { path: 'i-i-s-g-e-n-ед-изм-e/new' });
  this.route('i-i-s-g-e-n-номенклатура-l');
  this.route('i-i-s-g-e-n-номенклатура-e',
  { path: 'i-i-s-g-e-n-номенклатура-e/:id' });
  this.route('i-i-s-g-e-n-номенклатура-e.new',
  { path: 'i-i-s-g-e-n-номенклатура-e/new' });
  this.route('i-i-s-g-e-n-отчет-ф-р-l');
  this.route('i-i-s-g-e-n-отчет-ф-р-e',
  { path: 'i-i-s-g-e-n-отчет-ф-р-e/:id' });
  this.route('i-i-s-g-e-n-отчет-ф-р-e.new',
  { path: 'i-i-s-g-e-n-отчет-ф-р-e/new' });
  this.route('i-i-s-g-e-n-план-продаж-l');
  this.route('i-i-s-g-e-n-план-продаж-e',
  { path: 'i-i-s-g-e-n-план-продаж-e/:id' });
  this.route('i-i-s-g-e-n-план-продаж-e.new',
  { path: 'i-i-s-g-e-n-план-продаж-e/new' });
  this.route('i-i-s-g-e-n-приказ-о-у-ц-l');
  this.route('i-i-s-g-e-n-приказ-о-у-ц-e',
  { path: 'i-i-s-g-e-n-приказ-о-у-ц-e/:id' });
  this.route('i-i-s-g-e-n-приказ-о-у-ц-e.new',
  { path: 'i-i-s-g-e-n-приказ-о-у-ц-e/new' });
  this.route('i-i-s-g-e-n-сотрудники-l');
  this.route('i-i-s-g-e-n-сотрудники-e',
  { path: 'i-i-s-g-e-n-сотрудники-e/:id' });
  this.route('i-i-s-g-e-n-сотрудники-e.new',
  { path: 'i-i-s-g-e-n-сотрудники-e/new' });
  this.route('i-i-s-g-e-n-таб-менеджер-l');
  this.route('i-i-s-g-e-n-таб-менеджер-e',
  { path: 'i-i-s-g-e-n-таб-менеджер-e/:id' });
  this.route('i-i-s-g-e-n-таб-менеджер-e.new',
  { path: 'i-i-s-g-e-n-таб-менеджер-e/new' });
  this.route('i-i-s-g-e-n-таб-о-у-ц-l');
  this.route('i-i-s-g-e-n-таб-о-у-ц-e',
  { path: 'i-i-s-g-e-n-таб-о-у-ц-e/:id' });
  this.route('i-i-s-g-e-n-таб-о-у-ц-e.new',
  { path: 'i-i-s-g-e-n-таб-о-у-ц-e/new' });
  this.route('i-i-s-g-e-n-таб-товары-l');
  this.route('i-i-s-g-e-n-таб-товары-e',
  { path: 'i-i-s-g-e-n-таб-товары-e/:id' });
  this.route('i-i-s-g-e-n-таб-товары-e.new',
  { path: 'i-i-s-g-e-n-таб-товары-e/new' });
});

export default Router;
