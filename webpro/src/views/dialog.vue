<template>
	<div>
		<div class="dialog_container">
			<transition-group tag="div" name="dialogItem">
				<div class="dialog_item" v-for="msg in message"  v-bind:key="msg">
					<div class="dialog_item_pic">
						<img src="https://wallpapers.wallhaven.cc/wallpapers/thumb/small/th-661501.jpg" alt="">
					</div>
					<div class="dialog_item_info">
						<div class="dialog_item_name" v-text="user.name"></div>
						<div class="dialog_item_text" v-text="msg">123</div>
					</div>
				</div>
			</transition-group>
		</div>
		<div class="input_box">
			<mu-text-field v-model="text"></mu-text-field>
			<mu-button color="primary" @click="submitMsg()" class="submit_btn">发送</mu-button>
		</div>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                id:'',
                message:[],
                text:'',
                user:{},
            }
        },
        created(){
            console.log(this.$store.state)
            this.$socket.emit('connect')
        },
        sockets:{
		connect: function(){
			console.log('socket connected')
			    this.$socket.on('msg',(result) => {
			        console.log(result)
			        this.message.push(result)
			    })
		},
		customEmit: function(val){
			console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
		},
        },
        methods: {

            submitMsg:function() {
                let obj = {
                    username:'dada',
                    text:this.text,
                    id:this.$socket.id,
                    time:{
                        detault:Date.now()
                    }
                }
                this.$socket.emit('msg',this.text);

                this.text = '' ;
            },
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
	}
	.input_box .mu-input{
		margin-bottom:0;
		width:calc(100% - 30vw);
		min-height:50px;
		margin-left:5vw;
	}
	.submit_btn{
		margin:8px 5vw 0 ;
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
	.dialog_item_pic{
		margin-left: 2vw;
		margin-right:2vw;
		float:left;
		width:2rem;
		height:2rem;
		background-color: #fff;
		overflow:hidden;
		text-align: center;
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