import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    trendingTVShows: null,
    // Add more state variables for other TV show categories as needed
  },
  reducers: {
    addTrendingTVShows: (state, action) => {
      state.trendingTVShows = action.payload;
    },
    // Add more reducers for other TV show categories as needed
  },
});

export const { addTrendingTVShows } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
