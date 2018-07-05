import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import MuseUI from 'muse-ui'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client';
import 'muse-ui/dist/muse-ui.css'

// views
import App from './views/App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import User from './views/User.vue'
import Category from './views/Category.vue'
import Explore from './views/Explore.vue'
import Issue from './views/Issue.vue'
import Dialog from './views/dialog.vue'
//components
import Productdetail from './views/ProDetail.vue'
// global var

Vue.use(MuseUI)
Vue.use(Router)
Vue.use(Resource)
Vue.use(VueSocketio, socketio('http://127.0.0.1:8888/'));



export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
        children:[
            {
                path:'/', //主页
                name:'home',
                component:Home,
            }, {
                path:'/category', //分类
                name:'category',
                component:Category,
            },{
                path:'/explore',  //发现
                name:'explore',
                component:Explore
            },{
                path:'/user',  //用户
                name:'user',
                component:User
            },
        ]
    },
    {
      path: '/issue',
      name: 'issue',
      component: Issue
    },{
      path:'/login',  //登录
      name:'login',
      component:Login
    },{
      path:'/register',  //注册
      name:'register',
      component:Register
    },{
      path:'/productdetail/:id',
      name:'productdetail',
      component:Productdetail
    },{
      path:'/dialog',
      name:'dialog',
      component:Dialog,
    }
  ],
  mode:'history'
})
