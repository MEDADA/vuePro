<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style>

</style>

<script>


    export default{
        name: '',
        data(){
            return {}
        },
        created(){
            this.checkLogin();
        },
        methods:{
            checkLogin(){
                        //  登录后存  vuex 中user  再缓存
                let user = JSON.parse(window.localStorage.getItem('userData'));

                if(user){

                }

                console.log('1 : checkLogin...' + user)
            }
        },
        components:{

        }
    }
</script>
