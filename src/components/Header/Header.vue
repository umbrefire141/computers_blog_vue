<template>
	<header class="header">
		<div class="container">
			<nav class="nav">
				<RouterLink to="/" class="link">Home</RouterLink>
				<RouterLink to="/create-post" class="link">Create post</RouterLink>
			</nav>
			<Profile />
		</div>
	</header>
</template>
<script setup lang="ts">
import Profile from "./Profile/Profile.vue"
</script>
<style scoped>
.header {
	padding: 1.5rem 0;
	margin-bottom: 1rem;
	border-bottom: 1px solid var(--el-border-color);
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.nav {
	display: flex;
	gap: 1rem;
}

.link {
	transition: color .3s;
}

.link:hover {
	color: var(--el-menu-active-color);
}
</style>