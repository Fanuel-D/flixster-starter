import { useEffect, useState } from 'react'
import './App.css'


//Movie card fucntion 
function MovieCard({image, title, rating}){
  
  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`
  return (
    <div className='movie-card'>

      <img src={imageUrl} alt="there is an image here" className='imageTag'/>
      <p>{title}</p>
      <p>{rating}</p>
    </div>
  )
}

//Movie list function 
function MovieList({data}){
  if (!data){
    return null
  }

  return(
    <div className='movieList'>
    {data.map((movie)=>{
      return (
        <div>
          <MovieCard image={movie.poster_path} title={movie.original_title} rating = {movie.vote_average} />
        </div>
      )
      }
    )}
    </div>
  
  )
}

const App = () => {
  const [currMovie, setMovie] = useState(null)
  const [currPagenum, setPage]  = useState("1") 
  const [searchQuery,setSearchQuery] = useState("")

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY    
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currPagenum}`);
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
  },[currPagenum,searchQuery])

  function loadClicked(){
    let nextPage = currPagenum + 1
    setPage(nextPage)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

  
  return(
    <div className="App">
      <header className='App-header'>
        <h1>Flixster</h1>
        <form action="">
          <input type="text" placeholder='type movie name' onChange={handleSearchChange} value = {searchQuery}/>
        </form>
      
      </header>
      <MovieList data = {currMovie}/>
      <button onClick={loadClicked}>Load More</button>
    </div>
  )

}

export default App
