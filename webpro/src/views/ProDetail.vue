<template>
	<div>
		<navbar>detail</navbar>
		<mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
			<mu-card-header :title="proDetail.user" sub-title="">
				<mu-avatar slot="avatar">
					<img :src="proDetail.pic" alt="">
				</mu-avatar>
			</mu-card-header>
			<mu-card-media>
				<!--title="Image Title" sub-title="Image Sub Title"-->

				<img :src="proDetail.pic" alt="">
			</mu-card-media>
			<mu-card-title :title="proDetail.text" sub-title=""></mu-card-title>
			<mu-card-text>

			</mu-card-text>
			<mu-card-actions>
				<mu-button flat>赞</mu-button>
			</mu-card-actions>
		</mu-card>

	</div>
</template>

<script>
	import navbar from '@/components/navBar.vue'
    export default{
        name: '',
        data(){
            return {
                path:'http://192.168.0.55:8888/userReleaseDetail/',
                loading:false,
                proDetail:{}
            }
        },
        created:function () {
            this.getProDetailData()
        },
        methods:{
            getProDetailData:function () {
                this.loading = true;
                const param = this.$route.params.id;

                this.$http.get(this.path+param,{}).then((res) =>{
                    console.log(res);
                    this.$set(this,'proDetail',res.body[0])
                    this.loading = false;
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },
        components:{
            navbar
        }
    }
</script>

<style scoped>

</style>