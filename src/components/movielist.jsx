import MovieCard from "./moviecard.jsx";
import "../styles/movielist.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Modal from "./modal.jsx";
function MovieList({ data, likedListHandler, watchedListHandler }) {
  if (!data) {
    return null;
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = async (id, event) => {
    try {
      event.stopPropagation();
      const apiKey = import.meta.env.VITE_API_KEY;
      const movieDetailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

      const videosData = await fetch(videosUrl);
      if (!videosData.ok) {
        throw new Error("Couldn't fetch from trailer video from given URL");
      }
      const videos = await videosData.json();
      const trailer = videos.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      );
      const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;

      const detailsResponse = await fetch(movieDetailsURL);
      if (!detailsResponse.ok) {
        throw new Error("Couldn't fetch from details of movie from given URL");
      }
      const details = await detailsResponse.json();
      setModalOpen(true);
      setSelectedCard({ ...details, trailerUrl });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClosed = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };

  return (
    <div className="movieList">
      {data.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              watchedMoviesHandler={watchedListHandler}
              likedMoviesHandler={likedListHandler}
              movie={movie}
              onClickSelectedCard={handleSelectedCard}
            />
          </div>
        );
      })}
      <Modal
        isOpenBool={isModalOpen}
        selectedMovieData={selectedCard}
        isClosedFunc={handleClosed}
      />
    </div>
  );
}

MovieList.propTypes = {
  watchedListHandler: PropTypes.func,
  likedListHandler: PropTypes.func,
  data: PropTypes.array,
};

export default MovieList;
