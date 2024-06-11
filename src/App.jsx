import { useEffect, useState } from 'react'
import './App.css'
import './moviecard.css'
import './movielist.css'
import MovieList from './movielist'
import SearchForm from "./searchform.jsx"



const App = () => {
  const [currMovie, setMovie] = useState(null)
  const [currPagenum, setPage]  = useState("1") 


  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY   
    let tempUrl =  `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currPagenum}`


    // if (searchQuery) {
    //   tempUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currPagenum}&query=${encodeURIComponent(searchQuery)}`
    // }
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
  },[currPagenum])

  function loadClicked(){
    let nextPage = currPagenum + 1
    setPage(nextPage)
  }

  
  return(
    <div className="App">
      <header className='App-header'>
        <h1>Flixster</h1>
        <SearchForm />
      
      </header>
      <MovieList data = {currMovie}/>
      <button onClick={loadClicked}>Load More</button>
    </div>
  )

}

export default App
