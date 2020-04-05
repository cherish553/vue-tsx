import Vue from 'vue'
import Router from 'vue-router'
const files = require.context('./modules', false, /\.ts$/)

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login')
    },
    ...files.keys().map(item=>files(item).default)
  ]
})
// router.beforeEach((to, from, next) => {
//   // if ((to.path === '/' && !getCookie('token')) || (!to.name && !getCookie('token'))) return next({ name: 'login' })
//   // if ((to.path === '/' && getCookie('token')) || (to.name === 'login' && getCookie('token')) || (!to.name && getCookie('token'))) return next({ name: 'article-index' })
//   // if (!getCookie('token') && to.name !== 'login') return next({ name: 'login' })
//   next()
// })
export default router
