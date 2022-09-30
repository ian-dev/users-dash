import { rest } from "msw";
import { mockUsers, mockCurrentUser } from "./data";
// import { API } from './api';

// -------------------------------------
// MSW SERVER
// -------------------------------------

export const getUsers = rest.get(`*/users`, (req, res, ctx) => {
  return res(ctx.delay(), ctx.status(200), ctx.json(mockUsers()));
});

export const getCurrentUser = rest.get(`*/user/:userid`, (req, res, ctx) => {
  const { userid } = req.params;
  // debugger;
  return res(ctx.delay(), ctx.status(200), ctx.json(mockCurrentUser(userid)));
});

// -------------------------------------
// Exports
// -------------------------------------

export const handlers = [getUsers, getCurrentUser];
