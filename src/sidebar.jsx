import './sidebar.css'
function SideBar({liked, watched}) {
    console.log(liked)
    return (
        <div className='outer'>
            <div className='cool'> 
                <div>
                    <h1>Liked Movies</h1>
                        <ol>
                        {liked.map((likeMovie) => {
                            return (<li>{likeMovie}</li>)
                        })}
                        </ol>
                        
                    <h1 className='watchedMovies'>Watched Movies</h1>
                        <ol>
                        {watched.map((watchMovie) => {
                            return (<li>{watchMovie}</li>)
                        })}
                        </ol>
                </div>
            
            </div>
        </div>
        
    )
}

export default SideBar