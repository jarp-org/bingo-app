<script>
	import Layout from '../Layout.svelte';
	import PlayerList from '../PlayerList.svelte';
	import Title from '../Title.svelte';
</script>

<Layout>
	<div slot="qrCode" class="h-48 w-48 bg-error" />
	<PlayerList
		slot="playerList"
		players={[
			{ name: 'me', id: 'urmom' },
			{ name: 'petro', id: 'gay' }
		]}
	/>

	<Title slot="title" isHost={true} roomCode="your-magic-cum-piss" />
</Layout>
