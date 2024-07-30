<script lang="ts">
import axios from 'axios'

axios.defaults.baseURL = 'https://na-olimpe.ru/personal/api/'
</script>

<template>
	<div class="container">
		<Header />
		<NuxtRouteAnnouncer />
	</div>
</template>
