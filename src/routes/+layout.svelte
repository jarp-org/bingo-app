<script>
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';

	let client = new QueryClient();
</script>

<QueryClientProvider {client}>
	<div class="app">
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>
