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
import Message from './views/message.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import User from './views/User.vue'
import Category from './views/Category.vue'
import Explore from './views/Explore.vue'
import Issue from './views/Issue.vue'
import Dialog from './views/dialog.vue'
import ProList from './views/ProList.vue'
import AddFriend from './views/AddFriend.vue'
import UserDetail from './views/UserDetail.vue'
//components
import Productdetail from './views/ProDetail.vue'
// global var

Vue.use(MuseUI)
Vue.use(Router)
Vue.use(Resource)
Vue.use(VueSocketio, socketio('http://192.168.0.55:8888/'));



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
            }, {
                path:'/message', //消息
                name:'message',
                component:Message,
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
    },{
      path:'/proList',
      name:'proList',
      component:ProList,
    },{
      path:'/addFriend',
      name:'addFriend',
      component:AddFriend
    },{
          path:'/userDetail',  //用户
          name:'userDetail',
          component:UserDetail
      }
  ],
  // mode:'history'
})
