import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import globalAPI from './assets/js/globalAPI'
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(globalAPI);

const store = new Vuex.Store({
    state: {
        count: 0,
        loading:false,
        user:{
            login:false,
        }
    },
    getters:{

    },
    mutations: {
        increment (state) {
            state.count++ ;
        },
        loading(state){
            state.loading = !state.loading ;
        },
        login(state,user){
            state.user = user ;
            state.user.login = true ;
        },
        userOut(state){
            state.user.login = false;
        }
    }
});
Vue.prototype.$store = store;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

