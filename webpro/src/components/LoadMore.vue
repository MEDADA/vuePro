<template>
	<div>
		<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" class="load_more_cont">
			<mu-flex class="demo-linear-progress" v-if="loading">
				<mu-linear-progress></mu-linear-progress>
			</mu-flex>
			<slot name="body"></slot>
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
		</mu-load-more>
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
            }
        },
        created(){
            this.getPicList();
        },
        methods:{
            getPicList:function () {
                this.loading = true;
                let path = this.listPath || 'http://localhost:8888/pics';
                this.$http.get(path,{}).then((res) =>{
                    console.log(res.body);
                    let newArray = this.list1.concat(res.body)
                    this.list1 = newArray;
                    this.loading = false;
                }).catch(function (error) {
                    console.log(error)
                })
            },
            refresh () {
                this.refreshing = true;
                setTimeout(() => {
                    this.getPicList()
                    this.refreshing = false;
                }, 500)
            },
            load () {
                setTimeout(() => {
                    this.getPicList()
                }, 500)
            }
        },

    }
</script>

<style scoped>
	.demo-linear-progress{
		position:absolute;
		left:0;
		top:0;
		z-index:99;
		width:100%;
		height:10px;
	}
	.load_more_cont{
		position:absolute;
		top:0;
		left:0;
		width:100%;
	}
</style>