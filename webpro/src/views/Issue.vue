<template>
	<div>
		<mu-container>
			<mu-form :model="form" label-position="top" label-width="200">
				<mu-form-item label="输入您想发布的文字" prop="text" :rules="rules.textRules">
					<mu-text-field v-model="form.text" placeholder="请输入..." prop="text"
					               full-width></mu-text-field>
				</mu-form-item>
			</mu-form>
			<mu-form :model="form" label-position="left" label-width="80">
				<mu-select label="选择分类" filterable v-model="form.category" full-width>
					<mu-option v-for="option,index in category" :key="option" :label="option" :value="option"></mu-option>
				</mu-select>
				<mu-form-item label="上传图片">
					<mu-paper class="demo-paper" :z-depth="3" v-for="(img,ind) in form.files">
						<img :src="img" alt="" width="100px"
						     v-clickDel="{delFiles:delFiles,ind:ind,array:form.files}">
					</mu-paper>
					<mu-button fab color="secondary" v-uploadfiles="{setFiles:setFiles}">
						<mu-icon value="add"></mu-icon>
					</mu-button>
				</mu-form-item>
			</mu-form>
			<mu-flex justify-content="center" style="margin-top:100px;">
				<mu-button color="red" @click="release()">发布</mu-button>
			</mu-flex>
		</mu-container>

		<mu-snackbar :color="color.color" :open.sync="color.open">
			<mu-icon left></mu-icon>
			{{color.message}}
			<mu-button flat slot="action" color="#fff" @click="color.open = false">Close</mu-button>
		</mu-snackbar>
	</div>
</template>

<script>
    export default{
        name: '',
        data(){
            return {
                form: {
                    text: '',
                    files: [],
                    createdDate:'',
                    category:'',
                },
                rules: {
                    textRules: [
                        {validate: (val) => !!val, message: '文字不能为空'},
                        {validate: (val) => val.length >= 2 && val.length <= 255, message: '用户名长度限制 >2 <255'}
                    ],
                },
                category:['服装设计','工业设计','平面设计','动漫','UI/UX','模特','风景摄影'],
                colors: ['success', 'info', 'error', 'warning'],
                color: {
                    color: 'success',
                    message: 'Hello World, Snackbar !',
                    open: false,
                    timeout: 3000
                }
            }
        },
        created(){
            this.checkLogin()
            console.log(this.GLOBAL.globalUser)
        },
        methods: {
            checkLogin(){
                let userData = JSON.parse(window.localStorage.getItem('userData'));
                if (userData) {
                    console.log('欢迎你,' + userData.username)
                } else {
                    this.$router.push('/login')
                }
            },
            setFiles(file){
                if (this.form.files.length < 4) {
                    this.form.files.push(file)
                } else {
                    console.log('最多添加三张图片')
                }
            },
            delFiles(arr, ind){
                if (arr) {
                    arr.splice(ind, 1);
                    console.log(arr)
                }
            },
            release(){
                this.getDate();
                let path = 'http://192.168.0.55:8888/issue';
                let params = {
                    user:this.GLOBAL.globalUser.username,
                    createDate:this.createDate,
                    text:this.form.text,
                    pic:this.form.files,
                    category:this.form.category,
                };
                this.$http.post(path,params).then((res)=>{
			console.log(res)
                    if(res.ok){
                        this.openColorSnackbar();
//		        this.$router.go(-1);
                    }
                }).catch((error)=>{
			console.log(error)
                })
            },
            loading(){
                if (this.loading == false) this.loading = true;
            },
            overLoad(){
                if (this.loading == true) this.loading = false;
            },
            getDate(){
                let date = new Date();
                let str = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
                this.createdDate = str;
            },
            openColorSnackbar () {
                if (this.color.timer) clearTimeout(this.color.timer);
                this.color.open = true;
                this.color.timer = setTimeout(() => {
                    this.color.open = false;
                }, this.color.timeout);
            }
        },
        directives: {
            uploadfiles: {
                inserted: function (el, binding) {
                    let file = document.createElement('input');
                    file.setAttribute('type', 'file');
                    file.setAttribute('hidden', true);
                    el.appendChild(file);
                    el.onclick = function () {
                        file.click();
                    };
                    file.onchange = function (event) {
                        let base64 = event.target.files.item(0);
                        let freader = new FileReader();
                        freader.readAsDataURL(base64);
                        freader.onload = function (e) {
                            console.log(e.target.result)
                            binding.value.setFiles(e.target.result);
                        };
                        file.value = '';  //清空value 强制每次触发change
                    }
                }
            },
            clickDel: {
                inserted: function (el, binding) {
                    el.onclick = function () {
                        let ind = binding.value.ind;
                        let array = binding.value.array;
                        binding.value.delFiles(array, ind)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>