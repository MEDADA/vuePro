<template>
	<div class="app">
		<!--<router-link to="/about">About</router-link>-->
		<div class="content">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
		<btmMenu></btmMenu>
	</div>
</template>
<style>
	.content{
		overflow:hidden;
	}
	a{
		color:inherit;
	}
</style>
<script>
    import btmMenu from '@/components/btmMenu.vue'
    export default {
        name: 'app',
        created:function() {


        },
        components: {
            btmMenu
        },
        methods:{

        }
    }
</script>
