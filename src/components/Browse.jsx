import { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import useOnAirTvSeries from "../hooks/useOnAirTvSeries";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTVShows from "../hooks/useTrendingTVShows";
const Browse = () => {
  useNowPlayingMovies();
  useMovieTrailer();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  usePopularTvSeries();
  useTopRatedTvSeries();
  useOnAirTvSeries();
  useTrendingMovies();
  useTrendingTVShows();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
