import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingTVShows } from "../utils/tvShowsSlice";
import {API_OPTIONS} from "../utils/constants"
const useTrendingTVShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getTrendingTVShows = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch trending TV shows');
        }

        const json = await response.json();
        dispatch(addTrendingTVShows(json.results));
      } catch (error) {
        console.error('Error fetching trending TV shows:', error);
        // Handle error gracefully
      }
    };

    getTrendingTVShows();
  }, [dispatch]);
};

export default useTrendingTVShows;
