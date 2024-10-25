<template>
	<el-form :model="form" label-width="auto" style="max-width: 600px">
		<el-form-item label="Title">
			<el-input v-model="form.title" />
		</el-form-item>
		<el-form-item label="Content">
			<el-input v-model="form.content" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Create post</el-button>
		</el-form-item>
	</el-form>
</template>
<script setup lang="ts">
import axios from '@/utils/axios'
import { reactive } from 'vue'

const form = reactive({
	title: '',
	content: ''
})

const onSubmit = () => {

	axios.post('posts', { title: form.title, content: form.content })
}
</script>
<style scoped></style>