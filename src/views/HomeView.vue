<template>
	<div>
		<Card v-for="post in posts" :title="post.title" :content="post.content" :author="post.author.name" />
	</div>
</template>
<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import { IPost } from '@/types/post.interface'
import axios from '@/utils/axios'
import { onMounted, ref } from 'vue'

let posts = ref<IPost[]>([])


onMounted(async () => {
	const { data } = await axios.get('posts')

	posts.value = data
})

</script>