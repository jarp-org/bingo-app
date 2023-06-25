<script>
	import { browser } from '$app/environment';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import '../app.css';

	let client = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider {client}>
	<div class="app">
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>
