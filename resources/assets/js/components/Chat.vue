<template>
	<div class="chat-component">
		<button @click="test">Test</button>
	</div>
</template>

<script>
	export default {
		methods: {
			test() {
				axios.get('/api/user')
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	}
</script>