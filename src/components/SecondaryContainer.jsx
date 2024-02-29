import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import tvSeriesSlice from "../utils/tvSeriesSlice";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store) => store.tvSeries);
  const tvShows = useSelector((store) => store.tvShows);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-64 pl-2 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending TV Shows"} movies={tvShows.trendingTVShows} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Tv Series"} movies={tvSeries.popularTvSeries} />
          <MovieList title={"Top Rated Tv Series"} movies={tvSeries.topRatedTvSeries} />
          <MovieList title={"On Air Tv Series"} movies={tvSeries.onAirTvSeries} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;