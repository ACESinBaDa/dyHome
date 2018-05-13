import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/index'

Vue.use(Router)

let router = new Router({
  routes: [...Home],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/')
  } else {
    if (to.meta.title || to.params.message) {
      document.title = to.meta.title || to.params.message.title
    } else {
      document.title = '大院科技'
    }
    next()
  }
})

export default router
