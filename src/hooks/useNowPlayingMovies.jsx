import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
   

    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      // Handle error gracefully
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]);

  // Optionally, add dispatch as a dependency if it's used within getNowPlayingMovies
};

export default useNowPlayingMovies;
