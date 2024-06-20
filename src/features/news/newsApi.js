import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Get API key and host from environment variables
const API_KEY = String(import.meta.env.VITE_RAPID_API_KEY);
const API_HOST = String(import.meta.env.VITE_RAPID_API_HOST);

// Create a newsApi slice using createApi from Redux Toolkit
export const newsApi = createApi({
  reducerPath: "newsApi", // Name of the slice in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://news-api14.p.rapidapi.com/v2/",
    // Add headers to the request
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Endpoint to fetch news list
    getNewsList: builder.query({
      query: ({ page = 1, category = "General" }) =>
        `trendings?topic=${category}&language=en&limit=15&page=${page}`,
      transformResponse: (response) => response.data,
    }),
    // Endpoint to search for news
    searchNews: builder.query({
      query: ({ page = 1, query = "General" }) =>
        `search/articles?query=${query}&language=en&limit=15&page=${page}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetNewsListQuery, useSearchNewsQuery } = newsApi;
