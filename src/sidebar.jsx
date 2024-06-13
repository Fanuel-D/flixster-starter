import "./sidebar.css";
function SideBar({ liked, watched }) {
  return (
    <div className="outer">
      <h1>Liked Movies</h1>
      <ol>
        {liked.map((likeMovie) => {
          return <li>{likeMovie}</li>;
        })}
      </ol>

      <h1 className="watchedMovies">Watched Movies</h1>
      <ol>
        {watched.map((watchMovie) => {
          return <li>{watchMovie}</li>;
        })}
      </ol>
    </div>
  );
}

export default SideBar;
