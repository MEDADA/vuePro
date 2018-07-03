<template>
	<div>

	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {}
        },
        created(){
            this.checkUserData();
            this.getUserReleasedData();
        },
        methods:{
            checkUserData(){
		
            },
            getUserReleasedData(){
                this.$http.get('',{}).then((res) => {

                }).catch((error) => {

                })



            }
        }
    }
</script>

<style scoped>

</style>