import { useEffect, useState } from 'react'
import './App.css'
import './moviecard.css'
import './movielist.css'
import MovieList from './movielist'
import SearchForm from "./searchform.jsx"



const App = () => {
  const [currMovie, setMovie] = useState(null)
  const [currPagenum, setPage]  = useState(1) 
  const [searchQuery,setSearchQuery] = useState("")


  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY   
    let tempUrl =  `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currPagenum}`


    if (searchQuery != "") {
      tempUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${currPagenum}&query=${encodeURIComponent(searchQuery)}`
    }

    const response = await fetch(tempUrl);
    const data = await response.json();    
    console.log(data)

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
  },[currPagenum, searchQuery])

  function loadClicked(){
    let nextPage = currPagenum + 1
    setPage(nextPage)
  }

  function handleNowPlaying() {
    setSearchQuery("");
  }

  const handleSubmit = (curr) =>{
    setSearchQuery(curr);
  }

  

  
  return(
    <div className="App">
      <header className='App-header'>
        <h1>Flixster</h1>
        <SearchForm formUpdate = {handleSubmit}/>
        <button onClick={handleNowPlaying}>Now Playing</button>
      
      </header>
      <main>
        <MovieList data = {currMovie}/>
        <button onClick={loadClicked}>Load More</button>
      </main>
   
    </div>
  )

}

export default App
