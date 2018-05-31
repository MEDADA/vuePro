import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import User from './views/User.vue'

Vue.use(MuseUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //主页
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },{
      path:'/login',  //登录
      name:'login',
      component:Login
    },{
      path:'/register',  //注册
      name:'register',
      component:Register
    },{
          path:'/user',  //注册
          name:'user',
          component:User
      }
  ],
  mode:'history'
})
