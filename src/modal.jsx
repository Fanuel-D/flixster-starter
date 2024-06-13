import "./modal.css";
function Modal({ isOpen, isClosed, selectData }) {
  const handleModalClicked = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      {isOpen && (
        <div className="modalBackDrop" onClick={isClosed}>
          <div className="modalContent" onClick={handleModalClicked}>
            <h1 className="modalText">{selectData.title}</h1>
            <img
              className="modalImg"
              src={`https://image.tmdb.org/t/p/w500${selectData.backdrop_path}`}
              alt="there is a pic"
            />
            <p className="modalText">
              Release Date: {selectData.release_date}{" "}
            </p>
            <p className="modalText">Overview: {selectData.overview}</p>
            <p className="modalText">
              Genres: {selectData.genres.map((genre) => genre.name).join(", ")}
            </p>
            <div className="trailer">
              {selectData.trailerUrl && (
                <iframe
                  className="video"
                  src={selectData.trailerUrl}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Movie Trailer"
                  width="600"
                  height="400"
                ></iframe>
              )}
              <button className="closeButton" onClick={isClosed}>
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

export default Modal;
