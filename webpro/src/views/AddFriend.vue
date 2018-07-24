<template>
	<div>
		<mu-container class="search_header">
			<mu-row>
				<mu-col span="1">
					<mu-flex class="flex-demo" justify-content="center" >
						<mu-button icon slot="left" @click="$goBack()">
							<mu-icon value="keyboard_arrow_left"></mu-icon>
						</mu-button>
					</mu-flex>
				</mu-col>
				<mu-col span="10">
					<mu-text-field v-model="searchFriend" style="width:100%;"></mu-text-field>
				</mu-col>
				<mu-col span="1" >
					<mu-flex class="flex-demo" justify-content="center" >
						<mu-button icon color="primary" @click="queryUser">
							<mu-icon value="search"></mu-icon>
						</mu-button>
					</mu-flex>

				</mu-col>
			</mu-row>


		</mu-container>
		<mu-list class="dialog_list">
			<mu-list-item avatar button :ripple="false"  v-for="item in fruits">
				<mu-list-item-action>
					<mu-avatar>
						<img :src="item.pic">
					</mu-avatar>
				</mu-list-item-action>
				<mu-list-item-title v-text="item.username"></mu-list-item-title>
				<mu-list-item-action @click="addFriend(item._id)" right>
					<mu-button icon color="primary">
						<mu-icon value="add"></mu-icon>
					</mu-button>
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
                queryNamePath:'http://192.168.0.55:8888/queryUser/',
                fruits : [],
                searchFriend:'',

            }
        },
        created(){
            this.$userLogin();
        },
        methods:{
            addFriend(id){
		if(id){
                    this.$http.post('http://192.168.0.55:8888/addFriend/' + id, {
                        username:this.$store.state.user.user.username,
                        password:this.$store.state.user.user.password,
                        pic:this.$store.state.user.user.pic,
                        _id:this.$store.state.user.user._id,
                    }).then((res) => {
                        console.log(res)
                        res.body
                    }).catch(function (error) {
                        console.log(error)
                    })
		}
            },
            queryUser(){
                if(this.searchFriend != '') {
                    this.$http.get(this.queryNamePath + this.searchFriend, {}).then((res) => {
                        this.fruits = res.body
                    }).catch(function (error) {
                        console.log(error)
                    })
                }
            }
        },
        watch:{
            searchFriend:function (val) {
                this.queryUser()
            }
        },
        directives:{

        }
    }
</script>

<style scoped>
	.search_header{
		background-color: #ccc;
	}
</style>