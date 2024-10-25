<template>
	<el-form :model="form" label-width="auto" style="max-width: 600px">
		<el-form-item label="Email">
			<el-input type="email" v-model="form.email" />
		</el-form-item>
		<el-form-item label="Name">
			<el-input v-model="form.name" />
		</el-form-item>
		<el-form-item label="Password">
			<el-input type="password" v-model="form.password" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Sign up</el-button>
		</el-form-item>
		<RouterLink to="/auth/sign-in">If you have an account, sign in</RouterLink>
		<div>{{ error }}</div>
	</el-form>
</template>
<script setup lang="ts">
import router from '@/router'
import { uesrStore } from '@/store/user.store'
import { reactive } from 'vue'
const { signUp, error } = uesrStore()

const form = reactive({
	email: '',
	name: '',
	password: ''
})

const onSubmit = () => {
	signUp(form)
	router.push('/')
}
</script>
<style scoped></style>