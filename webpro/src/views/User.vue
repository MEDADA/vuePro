<template>
	<div>
		<mu-container>
		<mu-list>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-avatar color="indigo">
						<mu-icon value="account_circle"></mu-icon>
					</mu-avatar>
				</mu-list-item-action>
				<mu-list-item-title>User Name</mu-list-item-title>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="grade"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>Stared</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="send"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>Sent mail</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="drafts"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>Drafts</mu-list-item-title>
			</mu-list-item>
			<mu-divider></mu-divider>
			<mu-list-item button :ripple="false">
				<mu-list-item-action>
					<mu-icon value="power_settings_new"></mu-icon>
				</mu-list-item-action>
				<mu-list-item-title>Exit</mu-list-item-title>
			</mu-list-item>
		</mu-list>
		</mu-container>
		<btmMenu></btmMenu>
	</div>
</template>

<script>
	import btmMenu from '@/components/btmMenu.vue'
    export default{
        name: '',
        data(){
            return {}
        },
        components:{
            btmMenu
        }
    }
</script>

<style scoped>

</style>