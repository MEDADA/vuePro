<template>
<div>
	<mu-grid-list class="gridlist-demo">
		<mu-grid-tile v-for="tile,index in list1" :key="'tile' + index" title-position="top" action-position="left">
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
                list1: [],
                refreshing: false,
                loading: false,
                cache:false,
            }
        },
        created(){
            this.getPicList();
        },
        methods:{
            getPicList:function () {
                this.loading = true;
                let path = this.listPath || 'http://192.168.0.55:8888/pics';
                this.$http.get(path,{}).then((res) =>{
                    console.log(res.body);
                    let newArray = this.list1.concat(res.body)
                    this.list1 = newArray;
                    this.loading = false;
                }).catch(function (error) {
                    console.log(error)
                })

            },

        }
    }
</script>

<style scoped>

</style>