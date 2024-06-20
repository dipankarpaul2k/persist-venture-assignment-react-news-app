import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsApi } from "../features/news/newsApi";
import newsReducer from "../features/news/newsSlice";

// Configure the store for the newsAPI and news reducer
export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

// For refetchOnFocus and refetchOnReconnect behaviors
setupListeners(store.dispatch);
