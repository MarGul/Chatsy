<template>
	<div class="chatsy">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import appHeader from './components/Header';

	export default {
		components: {
			appHeader
		}
	}
</script>

<style lang="scss">
	.chatsy {
		height: 100%;
	}
</style>