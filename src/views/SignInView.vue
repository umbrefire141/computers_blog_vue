<template>
	<el-form :model="form" label-width="auto" style="max-width: 600px">
		<el-form-item label="Email">
			<el-input type="email" v-model="form.email" />
		</el-form-item>
		<el-form-item label="Password">
			<el-input type="password" v-model="form.password" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Sign in</el-button>
		</el-form-item>
		<RouterLink to="/auth/sign-up">If you don't have an account, sign up</RouterLink>
	</el-form>
</template>
<script setup lang="ts">
import router from '@/router'
import { uesrStore } from '@/store/user.store'
import { reactive } from 'vue'

const { signIn } = uesrStore()

const form = reactive({
	email: '',
	password: ''
})

const onSubmit = () => {
	signIn(form)
	router.push('/')
}

</script>
<style scoped></style>