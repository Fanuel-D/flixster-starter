import "../styles/sidebar.css";
import PropTypes from "prop-types";
function SideBar({ likedList, watchedList }) {
  return (
    <div className="sideBar">
      <h1>Liked Movies</h1>
      <ol>
        {likedList.length > 0 ? (
          likedList.map((likeMovie) => {
            return (
              <li style={{ marginBottom: "10px", width: "70%" }}>
                {likeMovie}
              </li>
            );
          })
        ) : (
          <h4>No liked movies to display</h4>
        )}
      </ol>

      <h1 style={{ marginTop: "130px" }} className="watchedMovies">
        Watched Movies
      </h1>
      <ol>
        {watchedList.length > 0 ? (
          watchedList.map((watchMovie) => {
            return (
              <li style={{ marginBottom: "10px", width: "70%" }}>
                {watchMovie}
              </li>
            );
          })
        ) : (
          <h4>No watched movies selected</h4>
        )}
      </ol>
    </div>
  );
}
SideBar.propTypes = {
  likedList: PropTypes.array,
  watchedList: PropTypes.array,
};

export default SideBar;
