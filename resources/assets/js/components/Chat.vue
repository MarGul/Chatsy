<template>
	<div class="chat-component">
		<app-chat-sidebar></app-chat-sidebar>
		<app-chat-window></app-chat-window>
		<app-chat-presence></app-chat-presence>
	</div>
</template>

<script>
	import appChatSidebar from "./ChatSidebar";
	import appChatWindow from "./ChatWindow";
	import appChatPresence from "./ChatPresence";

	export default {
		components: {
			appChatSidebar,
			appChatWindow,
			appChatPresence
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.chat-component {
		display: flex;
		height: calc(100% - 52px);
	}
</style>