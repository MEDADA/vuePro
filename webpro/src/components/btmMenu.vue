<template>
	<div class="btm_menu">
		<mu-bottom-nav value="/">
			<mu-bottom-nav-item title="主页" icon="home"  href="/" value="home"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="分类" icon="dashboard" href="/category" value="category"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="发现" icon="explore" href="/explore"  value="explore" replace ></mu-bottom-nav-item>
			<mu-bottom-nav-item title="我" icon="account_circle"  href="./user" value="user" replace></mu-bottom-nav-item>
		</mu-bottom-nav>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                currentBtmMenu:'home'
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
	a{color:#ccc;}

.btm_menu{
	position:fixed;
	bottom:0;
	width:100%;
	left:0;
}
</style>