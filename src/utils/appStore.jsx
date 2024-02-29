import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvSeriesReducer from "./tvSeriesSlice"; // Import the tvSeriesReducer
import tvShowsReducer from "./tvShowsSlice"; // Import the tvShowsReducer
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvSeries: tvSeriesReducer, 
    tvShows: tvShowsReducer,
  },
});

export default appStore;
