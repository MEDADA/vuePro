import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(Vuex);

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
            state.count++
        },
        loading(state){
            state.loading = !state.loading;
        }
    }
});
Vue.prototype.$store = store;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

