<template>
	<div>

		<mu-grid-list class="gridlist-demo">
			<mu-grid-tile v-for="tile,index in list" :key="'tile' + index" title-position="top" action-position="left">
				<router-link :to="{path:'/productDetail/'+tile._id}">
					<img :src="tile.pic[0]" width="100%" height="100%"/>
				</router-link>
				<span slot="title">{{tile.title}}</span>
				<span slot="subTitle">by <b>{{tile.author}}</b></span>
				<mu-button slot="action" icon>
					<mu-icon value="star_border"></mu-icon>
				</mu-button>
			</mu-grid-tile>
		</mu-grid-list>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                listPath:'http://192.168.0.55:8888/userReleaseList/',
                list:[]
            }
        },
        created(){
            this.getProList()
        },
        methods:{
            getProList(){
                let path = this.listPath || '';
                console.log(encodeURI(this.$route.query.category))
                this.$http.get(path+encodeURI(this.$route.query.category),{}).then((res) =>{
                    console.log(res.body);
                    this.list = res.body;
                }).catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>