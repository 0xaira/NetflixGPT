import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOnAirTvSeries } from "../utils/tvSeriesSlice";
import {API_OPTIONS} from "../utils/constants"
const useOnAirTvSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    const getOnAirTvSeries = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch TV series on air');
        }

        const json = await response.json();
        dispatch(addOnAirTvSeries(json.results));
      } catch (error) {
        console.error('Error fetching TV series on air:', error);
        // Handle error gracefully
      }
    };

    getOnAirTvSeries();
  }, [dispatch]);
};

export default useOnAirTvSeries;
