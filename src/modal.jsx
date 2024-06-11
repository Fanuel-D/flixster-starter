import "./modal.css"
function Modal({isOpen, isClosed, selectData}) {
   
    console.log(selectData)

    return (
      <div>
         {isOpen && (
            <div className="modal">
                <h1>Movie Title: {selectData.title}</h1>
                <img className= "modalImg"src={`https://image.tmdb.org/t/p/w500${selectData.poster_path}`} alt= "there is a pic"/>
                <p>Release Date: {selectData.release_date} </p>
                <p>Overview: {selectData.overview}</p>
                <p>Genres: {selectData?.genres.map(genre => genre.name).join(', ')}</p>
        
            </div>
        )}
      </div>
        
    )
    
}

export default Modal
