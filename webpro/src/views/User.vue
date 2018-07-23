<template>
	<div>
		<mu-container>
		<mu-list>
			<mu-list-item button :ripple="true"  v-if="$store.state.user.login">
				<mu-list-item-action>
					<mu-avatar>
						<img :src="$store.state.user.user.pic">
					</mu-avatar>
				</mu-list-item-action>
				<mu-list-item-title v-text="$store.state.user.user.username"></mu-list-item-title>
			</mu-list-item>
			<mu-list-item v-if="!$store.state.user.login"  button :ripple="true" to="/login">
				<mu-list-item-action>
					<mu-icon value="grade"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>登录</mu-list-item-title>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="true" to="/issue">
				<mu-list-item-action>
					<mu-icon value="grade"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>发布</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="true">
				<mu-list-item-action>
					<mu-icon value="send"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>我的发布</mu-list-item-title>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="true" @click="$userLoginOut()">
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
                userData:{},
                color: {
                    color: 'success',
                    message: '退出登录,成功！',
                    open: false,
                    timeout: 3000
                },
            }
        },
        created(){
            this.$userLogin()
        },
        methods:{
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