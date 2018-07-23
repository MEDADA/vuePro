<template>
	<div>
		<mu-container>

			<mu-text-field label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle" v-model="form.username"></mu-text-field>
			<mu-text-field label="Password" label-float icon="locked" v-model="form.password"></mu-text-field>
			<mu-flex class="flex-demo" justify-content="center" >
				<mu-button color="primary" @click="login()">登录</mu-button>
			</mu-flex>


		</mu-container>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
                let path = 'http://192.168.0.55:8888/login';
                this.$http.post(path,{username:this.form.username,password:this.form.password}).then((res) =>{
                    if(res.body[0]){//                  login successfully
                        let userJSON = JSON.stringify(res.body[0]);
                        this.$store.commit('login',{  //登录成功信息存入 vuex
                            login:true,
                            user:res.body[0]
                        });
                        window.localStorage.setItem('userData',JSON.stringify(this.$store.state.user));  //登录成功信息存入本地缓存
                        setTimeout(function () {
                            window.history.go(-1)
                        },0)
                    }else if(res.body.error){ //        wrong password
                        console.log(res.body.error)
                    }else{   //                         You don't exist.
                        console.log(res.body)
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },
        components:{
		
        }
    }
</script>

<style scoped>

</style>