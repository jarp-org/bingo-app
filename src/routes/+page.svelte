<script>
	export const ssr = false;
	import { trpc } from '$lib/trpc/client';
	import ActionButton from '$lib/components/ActionButton.svelte';

	let greeting = trpc().greeting.createQuery();
</script>

<svelte:head>
	<title>Unnamed Bingo Game</title>
	<meta name="description" content="Who cares tbh" />
</svelte:head>

<section class="grid place-items-center h-screen">
	<div class="flex flex-col w-1/4 gap-5 items-center">
		<ActionButton action="/room/create">Create</ActionButton>
		<div class="divider">Or</div>
		<ActionButton action="/room/join">Join</ActionButton>
		<div class="font-accent text-3xl italic">a Room</div>
		<div>
			<p>{$greeting.data}</p>
		</div>
	</div>
</section>
