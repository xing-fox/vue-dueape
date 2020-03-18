import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home/curriculum'
  },
  {
    path: '/login',
    component: () => import('./views/login'),
    meta: {
      title: 'DueApe'
    }
  },
  {
    name: 'home',
    component: () => import('./views/index'),
    meta: {
      title: '课程'
    },
    children: [{
      path: 'curriculum',
      name: 'curriculum',
      component: () => import('./views/curriculum'),
      meta: {
        title: '课程 - 首页'
      }
    }, {
      path: 'personal',
      name: 'personal',
      component: () => import('./views/personal'),
      meta: {
        title: '我的课程'
      }
    }, {
      path: 'user',
      name: 'user',
      component: () => import('./views/user'),
      meta: {
        title: '账户'
      }
    }]
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
})

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next()
})

export {
  router
}