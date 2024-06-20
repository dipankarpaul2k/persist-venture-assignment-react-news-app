import { createSlice } from "@reduxjs/toolkit";

// Initial state for the news slice, including bookmarks loaded from localStorage
const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("newsly_bookmarks")) || [],
};

// Create a newsSlice using createSlice from Redux Toolkit
const newsSlice = createSlice({
  name: "news", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add a bookmark
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
      localStorage.setItem("newsly_bookmarks", JSON.stringify(state.bookmarks));
    },
    // Reducer to remove a bookmark
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.url !== action.payload
      );
      localStorage.setItem("newsly_bookmarks", JSON.stringify(state.bookmarks));
    },
  },
});

// Export the action creators and reducer from the news slice
export const { addBookmark, removeBookmark } = newsSlice.actions;
export default newsSlice.reducer;
