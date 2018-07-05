<template>
	<div>
		<div class="dialog_container">
			<div class="dialog_item"  v-for="msg in message" v-text="msg"></div>
		</div>
		<div class="input_box">
			<input type="text" v-model="text">
			<mu-button color="primary" @click="submitMsg()">发送</mu-button>
		</div>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                id:'',
                message:['欢迎你，回来！'],
                text:''
            }
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
            submitMsg:function () {
                this.$socket.emit('msg',this.text);
                console.log(this.text.indexOf('你好'));
                this.text = '';
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

	}
	.input_box input{

	}
</style>