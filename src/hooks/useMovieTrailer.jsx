import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants"
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
   

    const getMovieVideos = async () => {
      if (!movieId) {
        return;
      }

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie videos");
        }

        const json = await response.json();

        if (json.results && json.results.length > 0) {
          const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
          console.log(trailer);
          dispatch(addTrailerVideo(trailer));
        } else {
          console.error("No video data found");
          // Handle the case where no video data is returned
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
        // Handle error gracefully
      }
    };

    getMovieVideos();
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
