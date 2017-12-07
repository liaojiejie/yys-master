import Vue from 'vue'
import Router from 'vue-router'
import Forum from '../components/forum/Forum'
import Me from '../components/me/Me'
import Page from '../components/page/Page'
import Strategy from '../components/strategy/Strategy'
import Video from '../components/video/Video'
import Mitama from '../components/page/list/yhtj/Mitama'
import Sstjview from '../components/page/list/sstj/Sstjview'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/page',
      name: 'Page',
      component: Page,
      children: [
        {path: '9', component: Mitama}, {path: '8', component: Sstjview}
      ]
    },
    {path: '/forum', name: 'Forum', component: Forum},
    {path: '/me', name: 'Me', component: Me},
    {path: '/strategy', name: 'Strategy', component: Strategy},
    {path: '/video', name: 'Video', component: Video}
  ]
})
