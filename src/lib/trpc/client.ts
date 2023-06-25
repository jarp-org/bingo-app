import { svelteQueryWrapper } from 'trpc-svelte-query-adapter';

import { createTRPCWebSocketClient } from 'trpc-sveltekit/websocket';
import type { Router } from './router';

let browserClient: ReturnType<typeof svelteQueryWrapper<Router>>;

export function trpc() {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = svelteQueryWrapper<Router>({
		client: createTRPCWebSocketClient<Router>()
	});
	if (isBrowser) browserClient = client;
	return client;
}
