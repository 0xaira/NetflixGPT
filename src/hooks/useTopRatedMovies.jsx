import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getTopRatedMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch top rated movies');
        }

        const json = await response.json();
        dispatch(addTopRatedMovies(json.results));
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
        // Handle error gracefully
      }
    };

    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
