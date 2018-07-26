<template>
	<div>
		<mu-tabs :value.sync="active">
			<mu-col span="3" offset="1"><mu-tab>对话</mu-tab></mu-col>
			<mu-col span="3"><mu-tab>通讯录</mu-tab></mu-col>
			<mu-col span="3"><mu-tab>群组</mu-tab></mu-col>
			<mu-col span="1">
				<mu-button ref="button" icon color="#fff" @click="open = !open">
					<mu-icon value="add"></mu-icon>
				</mu-button>
			</mu-col>
		</mu-tabs>
		<mu-popover cover :open.sync="open" :trigger="trigger"  placement="bottom-end">
			<mu-list>
				<mu-list-item button to="/addFriend">
					<mu-list-item-title>添加好友</mu-list-item-title>
				</mu-list-item>
				<mu-list-item button>
					<mu-list-item-title>创建群聊天</mu-list-item-title>
				</mu-list-item>
			</mu-list>
		</mu-popover>
		<div v-if="active === 0">
			<mu-list class="dialog_list">
				<router-link :to="{path:'dialog', query:{ChatRoomId:item.chatRoomId || '',userid:item._id}}" tag="div"  v-for="item in dialog">
					<mu-list-item avatar button :ripple="false" >
						<mu-list-item-action>
							<mu-avatar>
								<img :src="item.user.pic">
							</mu-avatar>
						</mu-list-item-action>
						<mu-list-item-title v-text="item.user.username"></mu-list-item-title>
						<mu-list-item-action>
								<mu-icon value="chat_bubble"></mu-icon>
						</mu-list-item-action>
					</mu-list-item>
				</router-link>
			</mu-list>
		</div>
		<div v-if="active === 1">
			<mu-list class="dialog_list">
				<router-link :to="{path:'/userDetail'+item._id}"  tag="div"  v-for="item in friends">
					<mu-list-item avatar button :ripple="false" >
						<mu-list-item-action to="/userDetail">
							<mu-avatar>
								<img :src="item.pic">
							</mu-avatar>
						</mu-list-item-action>
						<mu-list-item-title v-text="item.username"></mu-list-item-title>
						<mu-list-item-action>
							<router-link :to="{path:'dialog', query:{userid:item._id}}" tag="div">
								<mu-icon value="chat_bubble"></mu-icon>
							</router-link>
						</mu-list-item-action>
					</mu-list-item>
				</router-link>
			</mu-list>
		</div>
		<div v-if="active === 2">
			<mu-list class="dialog_list">
				<router-link  v-for="item in group" :to="{path:'dialog', query:{ChatRoomId:item.chatRoomId}}" >
					<mu-list-item avatar button :ripple="true">
						<mu-list-item-action>
							<mu-avatar>
								<img :src="item.pic">
							</mu-avatar>
						</mu-list-item-action>
						<mu-list-item-title v-text="item.username"></mu-list-item-title>
						<mu-list-item-action>
							<mu-icon value="chat_bubble"></mu-icon>
						</mu-list-item-action>
					</mu-list-item>
				</router-link>
			</mu-list>
		</div>

	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                open: false,
                trigger: null,
                active:0,
                friends:[
                    {
                        username:'friends1',
                        pic:'',
                    },{
                        username:'DADA',
                        pic:'',
                    },{
                        username:'WALLEO',
                        pic:'',
                    },{
                        username:'DARLIN',
                        pic:'',
                    }
                ],
                dialog:[
                    {
                        user:{
                            username:'',
                            _id:'',
                            pic:''
                        },
                        chatRoomId:'',
                        record:[]
                    }
                ],
                group:[
                    {
                        username:'group 001',
                        pic:'',
                        chatRoomId:''
                    }
                ],
                getFriendsPath:'http://192.168.0.55:8888/getFriends/'
            }
        },
        created(){
            this.$userLogin();
            this.getFriends();
//            this.getLocalStorageUser();
        },
        methods:{
            getFriends(){
                this.$http.get(this.getFriendsPath + this.$store.state.user.user._id, {}).then((res) => {
                    console.log(res.body)
                    this.friends = res.body
                }).catch(function (error) {
                    console.log(error)
                })
            },
//            getLocalStorageUser(){
//                let user = window.localStorage.getItem(this.$store.state.user.user._id);
//                if(user){
//                    let dialogList = JSON.parse(user);
//                    this.dialog = dialogList;
//                }else{
//                    window.localStorage.setItem(this.$store.state.user.user._id,'');
//                }
//            },
        },
        mounted () {
            this.trigger = this.$refs.button.$el;
        }
    }
</script>

<style scoped>
.dialog_list{
	background-color: #fff;
}
</style>