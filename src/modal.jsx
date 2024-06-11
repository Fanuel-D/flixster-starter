import "./modal.css"
function Modal({isOpen, isClosed}) {

    return (
      <div>
         {isOpen && (
            <div className="modal">
                <h1>Movie Title</h1>
                <img src="" alt="This is a picture here" />
                <p>Release Date: </p>
                <p>Overview:</p>
                <p>Genres:</p>
        
            </div>
        )}
      </div>
        
    )
    
}

export default Modal
