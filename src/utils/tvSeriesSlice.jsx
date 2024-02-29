import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    popularTvSeries: null,
    topRatedTvSeries: null,
    onAirTvSeries: null, // New state for TV series on air
  },
  reducers: {
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
    addOnAirTvSeries: (state, action) => { // Reducer for adding TV series on air
      state.onAirTvSeries = action.payload;
    },
  },
});

export const { addPopularTvSeries, addTopRatedTvSeries, addOnAirTvSeries } = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
