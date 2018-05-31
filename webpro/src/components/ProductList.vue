<template>
<div>
			<mu-grid-list class="gridlist-demo">
				<mu-sub-header>December</mu-sub-header>
				<mu-grid-tile v-for="tile,index in list1" :key="'tile' + index" title-position="top" action-position="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
					<img :src="tile.image"/>
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
                list1: [{
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Breakfast',
                    author: 'Myron',
                    featured: true
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Camera',
                    author: 'ruolin'
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Hats',
                    author: 'kakali'
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Honey',
                    author: 'yuyang'
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Morning',
                    author: 'mokayi',
                    featured: true
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'Vegetables',
                    author: 'NUyyyyyyy'
                }, {
                    image: '../../assets/img/goodsPoster.jpg',
                    title: 'water',
                    author: 'TDDyyyyyyy'
                }]
            }
        },
        created(){
            this.getPicList()
        },
        methods:{
            getPicList:function () {
                this.$http.get('http://localhost:8888/pics',{}).then((response) =>{
                    console.log(response)
                }).catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>