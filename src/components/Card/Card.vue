<template>
	<el-card style="max-width: 480px">
		<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="img" />
		<div class="title">{{ title }}</div>
		<div class="content">{{ content }}</div>
		<div class="author">{{ author }}</div>
	</el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
	props: ['title', 'content', 'author'],
})
</script>
<style scoped>
.img {
	width: 100%;
	margin-bottom: 1.2rem;
}

.title {
	font-size: var(--el-font-size-extra-large);
	font-weight: 700;
	margin-bottom: 1rem;
}

.content {
	margin-bottom: 0.7rem;
}
</style>