import { useState } from "react";
import "../styles/moviecard.css";
import PropTypes from "prop-types";

function MovieCard({
  movie,
  likedMoviesHandler,
  watchedMoviesHandler,
  onClickSelectedCard,
}) {
  const [like, setLiked] = useState(false);
  const image = movie.poster_path;
  const title = movie.original_title;
  const rating = movie.vote_average;

  const handleLikeClicked = (e) => {
    e.stopPropagation();
    likedMoviesHandler(title);
    setLiked(!like);
  };

  const handleInputClicked = (e) => {
    e.stopPropagation();
    watchedMoviesHandler(title);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;
  return (
    <div
      className="movie-card"
      onClick={(e) => onClickSelectedCard(movie.id, e)}
    >
      <img src={imageUrl} alt="there is an image here" className="imageTag" />
      <div
        className="lowerMovieCardPart"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>{title}</p>
        <p>{rating}</p>
        <div className="spanLike">
          <span
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            className={like ? "red" : "white"}
            onClick={handleLikeClicked}
          >
            &#10084;
          </span>
          <input
            className="checkBox"
            type="checkbox"
            onClick={handleInputClicked}
            style={{ width: "15px", height: "15px" }}
          ></input>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  onClickSelectedCard: PropTypes.func,
  watchedMoviesHandler: PropTypes.func,
  likedMoviesHandler: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieCard;
