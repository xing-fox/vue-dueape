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
      path: 'my',
      name: 'myCurriculum',
      component: () => import('./views/myCurriculum'),
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
    }, {
      path: 'center',
      name: 'center',
      component: () => import('./views/center'),
      meta: {
        title: '账户'
      }
    }]
  }, {
    name: 'search',
    component: () => import('./views/search'),
    meta: {
      title: '搜索'
    },
  }, {
    name: 'payment',
    component: () => import('./views/payment'),
    meta: {
      title: 'Due币充值'
    }
  }
]

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
