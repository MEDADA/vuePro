<template>
	<div>
		<mu-list>
			<router-link  v-for="friend in friends" :to="{path:'dialog', query:{ChatRoomId:friend.chatRoomId}}" >
				<mu-list-item avatar button :ripple="true">
					<mu-list-item-action>
						<mu-avatar>
							<img :src="friend.pic">
						</mu-avatar>
					</mu-list-item-action>
					<mu-list-item-title v-text="friend.name"></mu-list-item-title>
					<mu-list-item-action>
						<mu-icon value="chat_bubble"></mu-icon>
					</mu-list-item-action>
				</mu-list-item>
			</router-link>
		</mu-list>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                friends:[
                    {
                        name:'chat room 001',
                        pic:'',
			chatRoomId:'-n1JLcFjCd7ay26aAAAM'
                    },{
                        name:'DADA',
                        pic:'',
                    },{
                        name:'WALLEO',
                        pic:'',
                    },{
                        name:'DARLIN',
                        pic:'',
                    }
                ]
            }
        },
        created(){
            this.loginCheck();
        },
        methods:{
            loginCheck:function(){
                if(!this.$store.state.user.login){
                    this.$router.push('/login')
                }else{
                    console.log('已登录'+this.$store.state.user.user.username)
                }
            }
        }
    }
</script>

<style scoped>

</style>