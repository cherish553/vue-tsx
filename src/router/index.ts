import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push
import { RawLocation, ErrorHandler, Route } from 'vue-router/types/router'
function push(location: RawLocation): Promise<Route>

function push(
  location: RawLocation,
  onResolve: Function | undefined,
  onReject?: ErrorHandler | undefined
): void

function push(
  this: Route,
  location: RawLocation,
  onResolve?: Function | undefined,
  onReject?: ErrorHandler | undefined
): Promise<Route> | void {
  if (onResolve || onReject) {
    originalPush.call(this, location, onResolve, onReject)
  } else {
    return new Promise(resolve => {
      resolve(originalPush.call(this, location))
    }).catch(err => err) as Promise<Route>
  }
}
Router.prototype.push = push

const files = require.context('./modules', false, /\.ts$/)

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/login'),
    },
    ...files.keys().map(item => files(item).default),
  ],
})
router.beforeEach((to, from, next) => {
  if (to.path === '/') return next({ name: 'login' })
  next()
})
export default router
