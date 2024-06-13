import MovieCard from "./moviecard.jsx";
import "../styles/movielist.css";
import { useEffect, useState } from "react";

import Modal from "./modal.jsx";
function MovieList({ data, liked, watched }) {
  if (!data) {
    return null;
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = async (id, event) => {
    event.stopPropagation();
    const apiKey = import.meta.env.VITE_API_KEY;
    const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

    const videosData = await fetch(videosUrl);
    const videos = await videosData.json();
    const trailer = videos.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );
    const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;

    const detailsResponse = await fetch(detailsUrl);
    const details = await detailsResponse.json();
    setModalOpen(true);
    setSelectedCard({ ...details, trailerUrl });
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
              watchedMoviesHandler={watched}
              likedMoviesHandler={liked}
              movie={movie}
              onClickSelectedCard={handleSelectedCard}
            />
          </div>
        );
      })}
      <Modal
        isOpen={isModalOpen}
        selectedCardData={selectedCard}
        selectData={selectedCard}
        isClosed={handleClosed}
      />
    </div>
  );
}

export default MovieList;
