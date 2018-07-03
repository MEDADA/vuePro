<template>
	<div>
		<mu-container>
		<mu-list>
			<mu-list-item button :ripple="false"  v-if="login">
				<mu-list-item-action>
					<mu-avatar>
						<img :src="userData.pic">
					</mu-avatar>
				</mu-list-item-action>
				<mu-list-item-title v-text="userData.username"></mu-list-item-title>
			</mu-list-item>
			<mu-list-item v-if="!login"  button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="grade"></mu-icon>
				</mu-list-item-action>
				<router-link to="/login"><mu-list-item-title>登录</mu-list-item-title></router-link>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="grade"></mu-icon>
				</mu-list-item-action>
				<router-link to="/issue"><mu-list-item-title>发布</mu-list-item-title></router-link>
			</mu-list-item>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="send"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>我的发布</mu-list-item-title>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="false" @click="logout()">
				<mu-list-item-action>
					<mu-icon value="power_settings_new"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>Quit</mu-list-item-title>
			</mu-list-item>
		</mu-list>
		</mu-container>
		<mu-snackbar :color="color.color" :open.sync="color.open">
			<mu-icon left></mu-icon>
			{{color.message}}
			<mu-button flat slot="action" color="#fff" @click="color.open = false">关闭</mu-button>
		</mu-snackbar>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                login:true,
                userData:{

                },
                color: {
                    color: 'success',
                    message: '退出登录,成功！',
                    open: false,
                    timeout: 3000
                }
            }
        },
        created(){
            this.userLogin();
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
        methods:{
            userLogin(){
                let userData = JSON.parse(window.localStorage.getItem('userData'));
                if(userData){
                    this.login = true;
                    this.userData = userData;
                    console.log(this.userData)
                }else{
                    this.login = false;
                }
            },
            logout(){
                let userData = window.localStorage.getItem('userData');
                if(userData){
                    window.localStorage.removeItem('userData');
                    this.$set(this,'login',false)
                    this.openColorSnackbar();
                }
            },
            openColorSnackbar () {
                if (this.color.timer) clearTimeout(this.color.timer);
                this.color.open = true;
                this.color.timer = setTimeout(() => {
                    this.color.open = false;
                }, this.color.timeout);
            }
        },
        components:{

        }
    }
</script>

<style scoped>

</style>