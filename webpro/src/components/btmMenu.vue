<template>
	<div class="btm_menu">
		<mu-bottom-nav :value=$route.name>
			<router-link :to="item.path" v-for="(item) in btmMenu" class="btm_menu_link">
				<mu-bottom-nav-item :title=item.title :icon=item.icon :value=item.value ></mu-bottom-nav-item>
			</router-link>
		</mu-bottom-nav>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                currentBtmMenu:'home',
                btmMenu:[
                    {
			title:'主页',
			path:'/',
			icon:'home',
			value:'home',
                        replace:true
                    },{
			title:'分类',
			path:'/category',
			icon:'dashboard',
			value:'category',
                        replace:true
                    },{
                        title:'发现',
                        path:'/explore',
                        icon:'explore',
                        value:'explore',
                        replace:true
                    },{
                        title:'我',
                        path:'/user',
                        icon:'account_circle',
                        value:'user',
                        replace:true
                    }
                ]
            }
        },
        created(){
            this.getRoutePath();
        },
        methods:{
		getRoutePath(){

		    console.log(this.$route.name)
		}
        }
    }
</script>

<style>

.btm_menu{
	position:fixed;
	bottom:0;
	width:100%;
	left:0;
}
	body{
		margin-bottom:56px;
	}
	.btm_menu_link{
		width:25%;
	}
</style>