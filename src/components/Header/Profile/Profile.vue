<template>
	<el-dropdown>
		<el-button type="primary">
			Profile<el-icon class="el-icon--right"><arrow-down /></el-icon>
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>Action 1</el-dropdown-item>
				<el-dropdown-item>Action 2</el-dropdown-item>
				<el-dropdown-item>Action 3</el-dropdown-item>
				<el-dropdown-item>Action 4</el-dropdown-item>
				<el-dropdown-item>Action 5</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({

})
</script>
<style scoped></style>