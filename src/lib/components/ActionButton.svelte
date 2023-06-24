<script lang="ts">
	export let action: (() => void) | string;
</script>

{#if typeof action === 'string'}
	<a class="btn-primary btn-outline btn w-full hover:scale-105" href={action}>
		<slot />
	</a>
{:else}
	<button class="btn-primary btn-outline btn w-full hover:scale-105" on:click={action}>
		<slot />
	</button>
{/if}
