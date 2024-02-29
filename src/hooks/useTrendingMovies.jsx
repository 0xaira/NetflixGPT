import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getTrendingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch trending movies');
        }

        const json = await response.json();
        dispatch(addTrendingMovies(json.results));
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        // Handle error gracefully
      }
    };

    getTrendingMovies();
  }, [dispatch]);
};

export default useTrendingMovies;
