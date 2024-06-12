import { useEffect, useState } from 'react'
import './App.css'
import './moviecard.css'
import './movielist.css'
import MovieList from './movielist'
import SearchForm from "./searchform.jsx"
import DropDown from './DropDown.jsx'



const App = () => {
  const [currMovie, setMovie] = useState(null)
  const [currPagenum, setPage]  = useState(1) 
  const [searchQuery,setSearchQuery] = useState("")
  const [filter, setFilter] = useState("popularity.desc")



  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY   
    let tempUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currPagenum}&sort_by=${filter}`


    if (searchQuery != "") {
      tempUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${currPagenum}&query=${encodeURIComponent(searchQuery)}&sort_by=${filter}`
    }

    const response = await fetch(tempUrl);
    const data = await response.json();    

    if (currPagenum > 1){
      setMovie( previous=> [
        ...previous,
        ...data.results
      ])
    } else{
      setMovie(data.results)
    }
  }

  useEffect(()=>{
      fetchData()   
  },[currPagenum, searchQuery,filter])

  function loadClicked(){
    let nextPage = currPagenum + 1
    setPage(nextPage)
  }

  const handleNowPlaying = (e) => {
    e.stopPropagation()
    setSearchQuery("");
    setPage(1);
  }

  const handleSubmit = (curr) =>{
    setPage(1);
    setSearchQuery(curr);
  }

  const handleChoose = (e) => {
    setFilter(e.target.value)
  }

  
  return(
    <div className="App">
      <header className='App-header'>
        <h1>Flixster</h1>
        <SearchForm formUpdate = {handleSubmit}/>
        <button onClick={handleNowPlaying}>Now Playing</button>
        <DropDown choose ={handleChoose} />
      </header>
      <MovieList data = {currMovie}/>
      <button onClick={loadClicked}>Load More</button>

      <footer className= 'App-footer'>
        Designed by Fanuel Dana
      </footer>

   
    </div>
  )

}

export default App
