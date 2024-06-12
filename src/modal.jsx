import "./modal.css"
function Modal({isOpen, isClosed, selectData}) {
   
    return (
      <div>
         {isOpen && (
            
            <div className="modalBackDrop">
                
                <div className="modalContent">
                  <h1 className="modalText">{selectData.title}</h1>
                  <img className= "modalImg"src={`https://image.tmdb.org/t/p/w500${selectData.backdrop_path}`} alt= "there is a pic"/>
                  <p className="modalText">Release Date: {selectData.release_date} </p>
                  <p className="modalText">Overview: {selectData.overview}</p>
                  <p className="modalText">Genres: {selectData?.genres.map(genre => genre.name).join(', ')}</p>
                  <button onClick={isClosed}> Close</button>
                </div>
              
            </div>
        )}
      </div>
        
    )
    
}

export default Modal
