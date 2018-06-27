<template>
	<div>
		<mu-appbar style="width: 100%;" color="primary">
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
//            go:function (path) {
//                let _path = path || '';
//                this.$router.push(_path)
//            }
        }
    }
</script>

<style scoped>

</style>