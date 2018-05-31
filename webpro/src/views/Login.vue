<template>
	<div>
		<navbar>登录</navbar>
		<mu-container>
			<mu-text-field label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br/>
			<mu-text-field label="Password" label-float error-text="请输入密码" icon="locked"></mu-text-field><br/>
		</mu-container>
	</div>
</template>

<script>
	import navbar from '@/components/navBar.vue'
    export default{
        name: '',
        data(){
            return {}
        },
        components:{
            navbar
        }
    }
</script>

<style scoped>

</style>