import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// -------------------------------------
// RTK CREATE API
// -------------------------------------
export const API = "usersAdmin";

export const usersApi = createApi({
  reducerPath: API,
  baseQuery: fetchBaseQuery({
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const authHeaders = {
        auth: 12345,
      };

      for (const header in authHeaders)
        headers.set(header, authHeaders[header]);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCurrentUser: build.query({
      query: (params) => {
        const { id } = params;
        return {
          url: `https://jsonplaceholder.typicode.com/user/${id}`,
          method: "GET",
        };
      },
    }),
    getUsers: build.query({
      query: () => ({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetCurrentUserQuery } = usersApi;
