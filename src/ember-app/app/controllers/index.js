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
          caption: i18n.t('forms.application.sitemap.gjcnfvfn12.caption'),
          title: i18n.t('forms.application.sitemap.gjcnfvfn12.title'),
          children: [{
            link: 'i-i-s-gjcnfvfn12-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-служба-доставки-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-gjcnfvfn12-хранение-l',
            caption: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-хранение-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-gjcnfvfn12-постамат-l',
            caption: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-постамат-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-gjcnfvfn12-пользователь-l',
            caption: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-пользователь-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-gjcnfvfn12-транзакция-l',
            caption: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.gjcnfvfn12.i-i-s-gjcnfvfn12-транзакция-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})