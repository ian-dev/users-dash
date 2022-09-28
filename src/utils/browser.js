import { setupWorker, rest } from 'msw';
import { handlers } from './server';

export const worker = setupWorker(...handlers);

worker.start({
	onUnhandledRequest: 'bypass'
});

// Make the `worker` and `rest` references available globally,
// so they can be accessed in both runtime and test suites.
window.msw = {
	worker,
	rest,
};