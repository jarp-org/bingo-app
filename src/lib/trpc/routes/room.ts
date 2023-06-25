import { t } from '$lib/trpc/t';
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';

const ee = new EventEmitter();

export const roomRouter = t.router({
	createRoom: t.procedure.subscription(() => {
		return observable<Room>((emit) => {
			const createRoom = (data: Room) => {
				emit.next(data);
			};

			ee.on('createRoom', createRoom);
		});
	})
});
