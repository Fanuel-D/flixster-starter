import { useEffect, useState } from "react";
import "../styles/App.css";
import MovieList from "./movielist.jsx";
import SearchForm from "./searchform.jsx";
import DropDown from "./dropdown.jsx";
import SideBar from "./sidebar.jsx";

const App = () => {
  const [moviesData, setMovie] = useState(null);
  const [currPagenum, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currPagenum}&sort_by=${filter}`;

    if (searchQuery != "") {
      URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${currPagenum}&query=${encodeURIComponent(
        searchQuery
      )}&sort_by=${filter}`;
    }
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Couldn't fetch from Movie from given URL");
      }
      const data = await response.json();

      if (currPagenum > 1) {
        setMovie((previous) => [...previous, ...data.results]);
      } else {
        setMovie(data.results);
      }
    } catch (error) {
      console.error(error);
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
    setFilter("");
    setPage(1);
  };

  const handleFormSubmit = (curr) => {
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
    <div className="App" style={{ textAlign: "center" }}>
      <header className="appHeader">
        <h1 className="nameOfSite" style={{ marginLeft: "20px" }}>
          Flixster
        </h1>
        <SearchForm className="searchForm" formUpdate={handleFormSubmit} />
        <div className="headerRightPart" style={{ marginRight: 40 }}>
          <button onClick={handleNowPlaying}>Now Playing</button>
          <DropDown chooseFilter={handleChoose} />
        </div>
      </header>
      <div className="bodyPart">
        <SideBar likedList={likedMovies} watchedList={watchedMovies} />
        <MovieList
          data={moviesData}
          likedListHandler={handleLikedMovies}
          watchedListHandler={handleWatchedMovies}
        />
      </div>
      <button
        style={{ marginTop: 0, marginLeft: "40rem" }}
        className="loadButton"
        onClick={loadClicked}
      >
        Load More
      </button>
      <footer className="appFooter">Designed by Fanuel Dana</footer>
    </div>
  );
};

export default App;
