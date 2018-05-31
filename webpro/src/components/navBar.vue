<template>
	<div>
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left" @click="goBack()">
				<mu-icon value="keyboard_arrow_left"></mu-icon>
			</mu-button>
			<slot></slot>
		</mu-appbar>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {}
        },
        methods:{
            goBack:function () {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>