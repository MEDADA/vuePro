<template>
	<div>

		<navbar>{{toUser.username}}</navbar>
		<div class="dialog_container">
			<div class="dialog_item_tips">已连接通道为 : {{chatRoomId}}</div>
			<transition-group tag="div" name="dialogItem">
				<div class="dialog_item" :class="{self:msg.userid == $store.state.user.user._id}" v-for="(msg,ind) in message" :key="ind">
					<div class="dialog_item_pic">
						<img :src="$store.state.user.user.pic" alt="" v-if="msg.userid == $store.state.user.user._id">
						<img :src="toUser.pic" alt="" v-else-if="msg.userid == toUser._id">
					</div>
					<div class="dialog_item_info">
						<div class="dialog_item_name" v-if="msg.userid == $store.state.user.user._id" v-text="$store.state.user.user.username"></div>
						<div class="dialog_item_name" v-else-if="msg.userid == toUser._id" v-text="toUser.username"></div>
						<div class="dialog_item_text" v-text="msg.text" v-if="msg.text"></div>
					</div>
				</div>
			</transition-group>
		</div>
		<div class="input_box">
			<mu-text-field v-model="text"></mu-text-field>
			<mu-button icon color="primary"  @click="submitMsg()"  class="submit_btn">
				<mu-icon value="send"></mu-icon>
			</mu-button>
		</div>
	</div>
</template>

<script>
	import navbar from '@/components/navBar.vue'
    export default{
        name: '',
        data(){
            return {
                chatRoomId:'',
                message:[],
                text:'',
                user:{},
                toUser:{

                },
                connect:false,
                talkUser:''
            }
        },
        created(){
            this.$userLogin();
        },
        mounted(){
            this.$socket.emit('connect');
        },
        sockets:{
		connect: function(){
		    if(!this.connect && this.$socket.id && this.$socket.id !== 'null'){  //绝对连接，判断连接状态是否成功，随机ID是否生成，并且不为null
                        this.connect = true;
                        console.log('socket connected : ' + this.chatRoomId)
//		        关于 $socket.id  从其他router进来将为 null  需要再 mounted后赋值
		        this.chatRoomId = this.$socket.id;
		        console.log(this.$socket.id)

                        this.getUserData();  //得到对方用户信息
                        this.creatChatRecord();  //创建聊天通道，如果第一次打开将新建通道
                    }
		},
		customEmit: function(val){
			console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
		},
        },
        methods: {

            submitMsg() {
                if(this.text.replace(/\s*/g,'') !== ''){
	                let obj = {
	                    text:this.text,
	                    userid:this.$store.state.user.user._id,
	                    id:this.chatRoomId,
	                    time:{
	                        detault:Date.now()
	                    }
	                };
                        this.$http.post
	                this.$socket.emit('msg',obj);
	                this.text = '' ;
                }
            },
            getUserData(){
                this.$http.get('http://192.168.0.55:8888/getUserId/'+this.$route.query.userid, {}).then((res) => {
                    this.toUser = res.body;
                    this.saveDialog();

                }).catch(function (error) {
                    console.log(error)
                })
            },
            creatChatRecord(){
                if(this.chatRoomId){
	                this.$http.post('http://192.168.0.55:8888/creatChatRecord/'+this.$route.query.userid, {id:this.$store.state.user.user._id,chatRoomId:this.chatRoomId}).then((res) => {
	                    console.log(res);
	                    var chatRoomId = res.body[0].chatRoomId;
	                    if(chatRoomId){
	                        this.chatRoomId = chatRoomId;
	                    }
	                    this.$socket.on('msg'+this.chatRoomId,(result) => {  // 实时接受数据
	                        let obj = {
	                            text : result.text,
	                            id : result.id,
	                            userid:result.userid
	                        };
	                        this.message.push(obj)
	                    });
	                }).catch(function (error) {
	                    console.log(error)
	                })
                }
            },
            saveDialog(){
                let user = window.localStorage.getItem(this.$store.state.user.user._id);
                let dialog = {
                    user: {
                        username: this.toUser.username,
                        _id: this.$route.query.userid,
                        pic: this.toUser.pic
                    },
                    chatRoomId: this.chatRoomId,
                    record: []
                };
                if (user) {
                    JSON.parse(user).push(dialog)
                } else {
                    let data = [];
                    data.push(dialog);
                    console.log(JSON.stringify(data));
                    window.localStorage.setItem(this.$store.state.user.user._id, JSON.stringify(data));
                }
            }
        },
        components:{
            navbar
        }
    }
</script>

<style scoped>
	.input_box{
		position:absolute;
		bottom:0;
		left:0;
		width:100%;
		height:50px;
		overflow:hidden;
		background-color: #ccc;
		display:flex;
	}
	.input_box .mu-input{
		margin-bottom:0;
		width:calc(100% - 35vw);
		min-height:50px;
		margin-left:5vw;
		flex:1;
	}
	.submit_btn{
		margin:0 5vw;
	}
	.input_box input{

	}
	.mu-raised-button{
		min-width: 5vw;
	}
	.dialog_item{
		transition: all 1s ease;
		position:relative;
		width:100%;
		padding:2vh 0 0 0;
		opacity:1;
		overflow:hidden;
	}
	.self{

	}
	.self .dialog_item_pic{
		float:right;
	}
	.self .dialog_item_info{
		float:right;
	}
	.self .dialog_item_name{
		text-align: right;
	}
	.self .dialog_item_text{
		background-color: deepskyblue;
		color:#fff;
	}
	.dialog_item_pic{
		margin-left: 2vw;
		margin-right:2vw;
		float:left;
		width:2rem;
		height:2rem;
		background-color: #fff;
		overflow:hidden;
		text-align: center;
		position:relative;
		left:0;
		top:0;
	}
	.dialog_item_pic img{
		height:100%;
	}
	.dialog_item_info{
		float:left;
		margin-top:-5px;
	}
	.dialog_item_name{
		font-size:0.72rem;
		color:#333;
	}
	.dialog_item_text{
		background: #fff;
		border-radius:4px;
		font-size:14px;
		padding: 5px 10px;
		max-width:80vw;
	}
	.dialog_item_tips{
		width:100%;
		padding:10px 0;
		color:#999;
		text-align: center;
		font-size:12px;
		clear:both;
	}
	/*对话交互效果*/
	.dialogItem-enter-active, .dialogItem-leave-active {
		transition: all .5s;
	}
	.dialogItem-enter, .dialogItem-leave-to
		/* .list-leave-active for below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(3vh);
	}
</style>