import { t } from '$lib/trpc/t';
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';

import { z } from 'zod';

const ee = new EventEmitter();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	sub: t.procedure.subscription(() => {
		return observable<string>((emit) => {
			ee.on('message', (data) => {
				emit.next(data);
			});
		});
	}),

	mut: t.procedure.input(z.string()).mutation(({ input }) => {
		ee.emit('message', input);
	})
});

export type Router = typeof router;
