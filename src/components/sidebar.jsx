import "../styles/sidebar.css";
function SideBar({ liked, watched }) {
  return (
    <div className="outer">
      <h1>Liked Movies</h1>
      <ol>
        {liked.length > 0 ? (
          liked.map((likeMovie) => {
            return <li>{likeMovie}</li>;
          })
        ) : (
          <h4>No liked Movies to display</h4>
        )}
      </ol>

      <h1 className="watchedMovies">Watched Movies</h1>
      <ol>
        {watched.length > 0 ? (
          watched.map((watchMovie) => {
            return <li>{watchMovie}</li>;
          })
        ) : (
          <h4>No watched movies selected</h4>
        )}
      </ol>
    </div>
  );
}

export default SideBar;
