import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Items"],
  endpoints: (builder) => ({
    fetchAllItems: builder.query({
      query: () => ({
        url: "/items",
      }),
      providesTags: ["Items"],
    }),
    fetchItemsById: builder.query({
      query: (id) => ({
        url: `/items/${id}`,
      }),
      providesTags: ["Items"],
    }),
  }),
});
