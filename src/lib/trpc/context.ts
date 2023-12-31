import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: CreateHTTPContextOptions | CreateWSSContextFnOptions) {
	return {
		// context information
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
