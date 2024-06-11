import './moviecard.css'
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

  export default MovieCard