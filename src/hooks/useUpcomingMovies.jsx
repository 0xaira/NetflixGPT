import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getUpcomingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch upcoming movies');
        }

        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        // Handle error gracefully
      }
    };

    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
