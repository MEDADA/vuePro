<template>
	<div>
		<mu-container>
			<mu-form ref="form" :model="validateForm" class="mu-demo-form">
				<mu-form-item label="username" prop="username" :rules="usernameRules">
					<mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
				</mu-form-item>
				<mu-form-item>
					<span style="margin-right: 16px;">sex</span>
					<mu-radio v-model="validateForm.sex" style="margin-right: 16px;" value="male" label="male"></mu-radio>
					<mu-radio v-model="validateForm.sex" style="margin-right: 16px;" value="female" label="female"></mu-radio>
				</mu-form-item>
				<mu-form-item prop="date" label="birthday">
					<mu-date-input v-model="validateForm.birthday" actions></mu-date-input>
				</mu-form-item>
				<mu-form-item label="password" prop="password" :rules="passwordRules">
					<mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
				</mu-form-item>
				<mu-form-item prop="isAgree" :rules="argeeRules">
					<mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
				</mu-form-item>
				<mu-form-item>
					<mu-button color="primary" @click="submit">确定</mu-button>
					<mu-button @click="clear">重置</mu-button>
				</mu-form-item>
			</mu-form>
		</mu-container>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写用户名'},
                    { validate: (val) => val.length >= 4 && val.length <= 10 , message: '用户名长度限制 >4 <10'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 4 && val.length <= 10, message: '密码长度 >4 <10'}
                ],
                argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
                validateForm: {
                    username: '',
                    password: '',
                    sex:'male',
                    birthday:'',
                    isAgree: false
                },
                labelPosition: 'top',
            }
        },
        methods:{
            submit () {
                this.$refs.form.validate();
//                this.$http.post()
            },
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
        }
    };
</script>

<style scoped>

</style>