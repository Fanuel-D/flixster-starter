import MovieCard from './moviecard'
import './movielist.css'
function MovieList({data}){
    if (!data){
      return null
    }
  
    return(
      <div className='movieList'>
      {data.map((movie)=>{
        return (
          <div key = {movie.id}>
            <MovieCard image={movie.poster_path} title={movie.original_title} rating = {movie.vote_average} />
          </div>
        )
        }
      )}
      </div>
    
    )
  }

  export default MovieList