import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   

    const getPopularMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch popular movies');
        }

        const json = await response.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        // Handle error gracefully
      }
    };

    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
