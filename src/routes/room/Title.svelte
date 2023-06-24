<script lang="ts">
	import ActionButton from '$lib/components/ActionButton.svelte';
	import Clipboard from '$lib/icons/clipboard.svelte';

	export let roomCode: string;
	export let isHost: boolean = false;
</script>

<header class="flex h-full flex-row-reverse items-center justify-between">
	<div class="flex flex-row gap-2">
		<h1 class="font-accent text-6xl">
			#{roomCode}
		</h1>
		<button
			class="mt-2 w-10 transition-transform hover:-translate-y-2 active:-translate-y-4"
			on:click={() => navigator.clipboard.writeText(roomCode)}
		>
			<Clipboard />
		</button>
	</div>

	{#if isHost}
		<div class="w-48">
			<ActionButton action={() => alert('started game')}>Start Game</ActionButton>
		</div>
	{/if}
</header>
