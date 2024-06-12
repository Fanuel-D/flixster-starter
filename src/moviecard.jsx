import './moviecard.css'
function MovieCard({movie,image, title, rating,handleClick, onClickSelectedCard}){
    
    const imageUrl = `https://image.tmdb.org/t/p/w500${image}`
    return (
      <div className='movie-card' onClick={ (e) => (onClickSelectedCard(movie.id,e))}>
  
        <img src={imageUrl} alt="there is an image here" className='imageTag'/>
        <p>{title}</p>
        <p>{rating}</p>
      </div>
    )
  }

  export default MovieCard