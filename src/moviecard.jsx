import { useState } from 'react'
import './moviecard.css'
function MovieCard({movie,likedMoviesHandler, watchedMoviesHandler, onClickSelectedCard}){
  const [like,setLiked] = useState(false)  
  const image = movie.poster_path
  const title = movie.original_title
  const rating = movie.vote_average

  
  const handleLikeClicked = (e) => {
      e.stopPropagation()
      likedMoviesHandler(title)
      setLiked(!like)
  }

  const handleInputClicked = (e) => {
    watchedMoviesHandler(title)
    e.stopPropagation()
  }

    
  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`
  return (
    <div className='movie-card' onClick={ (e) => (onClickSelectedCard(movie.id,e))}>

      <img src={imageUrl} alt="there is an image here" className='imageTag'/>
      <div className='lowerMovieCardPart'>
        <p>{title}</p>
        <p>{rating}</p>
        <div className='spanLike'>
          <span className={(like)?"red":"white"} onClick={handleLikeClicked}>&#10084;</span>
          <input className = "checkBox" type='checkbox' onClick={handleInputClicked}></input>
        </div>
      </div>
        

    </div>
  )
  }

  export default MovieCard