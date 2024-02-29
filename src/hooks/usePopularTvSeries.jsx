import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTvSeries } from "../utils/tvSeriesSlice";
import {API_OPTIONS} from "../utils/constants"
const usePopularTvSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getPopularTvSeries = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch popular TV series');
        }

        const json = await response.json();
        dispatch(addPopularTvSeries(json.results));
      } catch (error) {
        console.error('Error fetching popular TV series:', error);
        // Handle error gracefully
      }
    };

    getPopularTvSeries();
  }, [dispatch]);
};

export default usePopularTvSeries;
