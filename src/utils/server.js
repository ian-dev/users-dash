import { rest } from 'msw';
import mockUsers from './data';
// import { API } from './api';

// -------------------------------------
// MSW SERVER
// -------------------------------------

export const intercepReq = rest.get(
	`*/users`,
	(req, res, ctx) => {
		return res(
			ctx.delay(),
			ctx.status(200),
			ctx.json(mockUsers())
		);
	}
);

// -------------------------------------
// Exports
// -------------------------------------

export const handlers = [intercepReq];