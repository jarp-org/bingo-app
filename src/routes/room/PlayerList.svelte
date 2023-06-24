<script lang="ts">
	export let players: Player[];

	let [me, ...rest] = players;
</script>

<ul class="h-full rounded bg-base-300 p-4">
	<li class="flex items-end justify-between py-1 font-accent text-lg">
		{me.name}
		<span class="badge">you</span>
	</li>
	<div class="divider" />
	{#each rest as player (player.id)}
		<li class="py-1 font-accent text-lg">{player.name}</li>
	{/each}
</ul>
