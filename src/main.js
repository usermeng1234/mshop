import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
import '@/assets/css/reset.css';
//按需引入
import {CellGroup,Field,Tab,Toast,Tabs,Button, Icon,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant';
Vue.use(Button).use(Toast).use(CellGroup).use(Field).use(Tab).use(Tabs).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
