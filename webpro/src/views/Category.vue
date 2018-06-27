<template>
	<div>
		<mu-list>
			<mu-list-item button :ripple="false" v-for="item in categoryList">
				<mu-list-item-action>
					<mu-icon :value="item.icon"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title v-text="item.category"></mu-list-item-title>
				<mu-list-item-action>
					<mu-badge :content="item.total"  color="primary"></mu-badge>
				</mu-list-item-action>
			</mu-list-item>
		</mu-list>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                categoryList:[
                    {category:'平面设计',icon:'panorama',title:'平面设计',total:'0'},
                    {category:'动漫',icon:'videocam',title:'动漫',total:'0'},
                    {category:'模特',icon:'font_download',title:'模特',total:'0'},
                    {category:'风景摄影',icon:'view_quilt',title:'风景摄影',total:'0'},
                    {category:'服装设计',icon:'local_mall',title:'服装设计',total:'0'},
                ]
            }
        },
        created(){
            this.getCategoryTotal();
        },
        methods:{
		getCategoryTotal(){
                    for(let i = 0 ; i < this.categoryList.length;i++){
                        let item = this.categoryList[i];
                        this.$http.get('http://localhost:8888/category/'+item.category,{}).then((res)=>{
                            this.categoryList[i].total = ''+res.body.length;
                        }).catch((error)=>{
                            console.log(error)
                        });
                    }
		}
        },components:{

        },
    }
</script>

<style scoped>

</style>