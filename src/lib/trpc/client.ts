import type { Router } from './router';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

import { svelteQueryWrapper } from 'trpc-svelte-query-adapter';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export function serverSideTRPC(init?: TRPCClientInit) {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = createTRPCClient<Router>({ init });
	if (isBrowser) browserClient = client;
	return client;
}

export const trpc = svelteQueryWrapper<Router>({ client: serverSideTRPC() });
