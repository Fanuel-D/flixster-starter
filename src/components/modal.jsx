import "../styles/modal.css";
import PropTypes from "prop-types";
function Modal({ isOpenBool, isClosedFunc, selectedMovieData }) {
  const handleModalClicked = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      {isOpenBool && (
        <div className="modalBackDrop" onClick={isClosedFunc}>
          <div className="modalContent" onClick={handleModalClicked}>
            <h1 className="modalText">{selectedMovieData.title}</h1>
            <img
              className="modalImg"
              src={`https://image.tmdb.org/t/p/w500${selectedMovieData.backdrop_path}`}
              alt="there is a pic"
            />
            <p className="modalText">
              Release Date: {selectedMovieData.release_date}{" "}
            </p>
            <p className="modalText">Overview: {selectedMovieData.overview}</p>
            <p className="modalText">
              Genres:{" "}
              {selectedMovieData.genres.map((genre) => genre.name).join(", ")}
            </p>
            <div className="trailer">
              {selectedMovieData.trailerUrl && (
                <iframe
                  className="video"
                  src={selectedMovieData.trailerUrl}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Movie Trailer"
                  width="600"
                  height="400"
                ></iframe>
              )}
              <button
                className="closeButton"
                style={{ width: "40%" }}
                onClick={isClosedFunc}
              >
                {" "}
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Modal.propTypes = {
  isOpenBool: PropTypes.bool,
  isClosedFunc: PropTypes.func,
  selectedMovieData: PropTypes.object,
};
export default Modal;
