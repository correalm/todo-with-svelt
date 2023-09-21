import { writable } from 'svelte/store';

/**
 * 
 * @param {import('./types').Todos | []} initial 
 * @returns void
 */
export function createTodoStore(initial = []) {
	let uid = 1;

	const todos = initial.map(({ done, description }) => {
		return {
			id: uid++,
			done,
			description
		};
	});

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: ({ description = '', done = false}) => {
			const todo = {
				id: uid++,
				done: done,
				description
			};

			update($todos => [...$todos, todo])
		},
		remove: todo => {
			update($todos => $todos.filter(({ id }) => id !== todo.id));
		},
		mark: (todo, done) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, done }
			]);
		}
	};
}