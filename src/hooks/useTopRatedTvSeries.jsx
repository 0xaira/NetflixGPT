import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTvSeries } from "../utils/tvSeriesSlice";
import {API_OPTIONS} from "../utils/constants"
const useTopRatedTvSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getTopRatedTvSeries = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch top-rated TV series');
        }

        const json = await response.json();
        dispatch(addTopRatedTvSeries(json.results));
      } catch (error) {
        console.error('Error fetching top-rated TV series:', error);
        // Handle error gracefully
      }
    };

    getTopRatedTvSeries();
  }, [dispatch]);
};

export default useTopRatedTvSeries;
