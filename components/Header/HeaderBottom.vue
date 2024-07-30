<script setup lang="ts">
import axios from 'axios'

const data = ref([])

onMounted(async () => {
	await axios.get('').then(res => {
		// res.data.catalog[0].children.forEach(e => {
		// 	data.value.push(e)
		// })
		data.value.push(res.data.catalog[0].children[0])
		data.value.push(res.data.catalog[0].children[1])
		data.value.push(res.data.catalog[0].children[2])
		data.value.push(res.data.catalog[0].children[3])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
		data.value.push(res.data.catalog[0].children[4])
	})
})
</script>

<template>
	<div class="header-bottom flex mt-7 overflow-scroll w-full justify-between">
		<div
			v-for="(e, key) in data"
			:key="key"
			class="flex w-[119px] h-11 rounded-md items-center"
		>
			<img class="w-7 h-8 mr-2" :src="e.ico" :alt="e.name" />
			<span class="max-w-[100px] w-full text-black font-medium">
				{{ e.name }}
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
