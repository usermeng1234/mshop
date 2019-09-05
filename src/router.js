import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Car from './views/Cat.vue'
import My from './views/My.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }

  ]
})
