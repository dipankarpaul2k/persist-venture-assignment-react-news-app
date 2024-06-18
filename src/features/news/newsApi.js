import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_KEY = String(import.meta.env.VITE_RAPID_API_KEY);
const API_HOST = String(import.meta.env.VITE_RAPID_API_HOST);

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://news-api14.p.rapidapi.com/v2/trendings",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ page = 1, category = "General" }) =>
        `?topic=${category}&language=en&limit=10&page=${page}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
