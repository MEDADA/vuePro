<template>
	<div>
		<mu-list>
			<router-link to="dialog">
				<mu-list-item avatar button :ripple="true" v-for="friend in friends">
					<mu-list-item-action>
						<mu-avatar>
							<img :src="friend.pic">
						</mu-avatar>
					</mu-list-item-action>
					<mu-list-item-title v-text="friend.name"></mu-list-item-title>
					<mu-list-item-action>
						<mu-icon value="chat_bubble"></mu-icon>
					</mu-list-item-action>
				</mu-list-item>
			</router-link>
		</mu-list>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                friends:[
                    {
                        name:'Mike',
                        pic:'',
                    },{
                        name:'DADA',
                        pic:'',
                    },{
                        name:'WALLEO',
                        pic:'',
                    },{
                        name:'DARLIN',
                        pic:'',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>