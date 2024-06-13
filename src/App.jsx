import { useEffect, useState } from "react";
import "./App.css";
import "./moviecard.css";
import "./movielist.css";
import MovieList from "./movielist";
import SearchForm from "./searchform.jsx";
import DropDown from "./DropDown.jsx";
import SideBar from "./sidebar.jsx";

const App = () => {
  const [currMovie, setMovie] = useState(null);
  const [currPagenum, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let tempUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currPagenum}&sort_by=${filter}`;

    if (searchQuery != "") {
      tempUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${currPagenum}&query=${encodeURIComponent(
        searchQuery
      )}&sort_by=${filter}`;
    }

    const response = await fetch(tempUrl);
    const data = await response.json();

    if (currPagenum > 1) {
      setMovie((previous) => [...previous, ...data.results]);
    } else {
      setMovie(data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currPagenum, searchQuery, filter]);

  function loadClicked() {
    let nextPage = currPagenum + 1;
    setPage(nextPage);
  }

  const handleNowPlaying = (e) => {
    e.stopPropagation();
    setSearchQuery("");
    setPage(1);
  };

  const handleSubmit = (curr) => {
    setPage(1);
    setSearchQuery(curr);
  };

  const handleChoose = (e) => {
    setFilter(e.target.value);
  };

  const handleLikedMovies = (newMovieName) => {
    let newLikeList = [...likedMovies, newMovieName];
    setLikedMovies(newLikeList);
  };

  const handleWatchedMovies = (newWatchedMovie) => {
    let newWatchedList = [...watchedMovies, newWatchedMovie];
    setWatchedMovies(newWatchedList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="nameOfSite">Flixster</h1>

        <SearchForm className="searchForm" formUpdate={handleSubmit} />
        <div className="rightPart">
          <button onClick={handleNowPlaying}>Now Playing</button>
          <DropDown choose={handleChoose} />
        </div>
      </header>
      <div className="bodyPart">
        <SideBar liked={likedMovies} watched={watchedMovies} />
        <MovieList
          data={currMovie}
          liked={handleLikedMovies}
          watched={handleWatchedMovies}
        />
      </div>
      <button className="loadButton" onClick={loadClicked}>
        Load More
      </button>

      <footer className="App-footer">Designed by Fanuel Dana</footer>
    </div>
  );
};

export default App;
