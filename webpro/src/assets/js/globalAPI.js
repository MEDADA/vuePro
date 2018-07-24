const GlobalAPI = {};
GlobalAPI.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...


    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
        console.log('myGlobalMethod')
    }
    
    Vue.prototype.$userLogin = function () {   //登录检测
        //首先判断  vuex  是否存在，再判断  localStorage缓存 是否存在
        let localStorageUser = window.localStorage.getItem('userData');
        let vuexUser = this.$store.state.user;
        if(!vuexUser.login){
            if(!localStorageUser){
                console.log('未登录')
            }else{  //缓存存在  vuex user 缓存  读取vuex
                this.$store.commit('login',{  //登录成功信息存入 vuex
                    login:true,
                    user: JSON.parse(localStorageUser).user
                });
                console.log('已登录')
            }
        }else{
            console.log('已登录')
        }
    }
    Vue.prototype.$userLoginOut = function () {
        let localStorageUser = JSON.parse(window.localStorage.getItem('userData'));
        let vuexUser = this.$store.state.user;
            if(localStorageUser){
                window.localStorage.removeItem('userData');
            }
            if(vuexUser){
                this.$store.commit('login',{'login':false});
            }
    }
    Vue.prototype.$goBack = function () {
        this.$router.go(-1);  //后退
    }
};
module.exports = GlobalAPI ;