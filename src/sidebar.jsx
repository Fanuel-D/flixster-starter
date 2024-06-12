import './sidebar.css'
function SideBar({liked}) {
    console.log(liked)
    return (
        <div className='outer'>
            <div className='cool'> 
                <div>
                    <h1>Liked Movies</h1>
                        <ol>
                        {liked.map((movie) => {
                            return (<li>{movie}</li>)
                        })}
                        </ol>
                        
                    <h1>Watched Movies</h1>
                </div>
            
            </div>
        </div>
        
    )
}

export default SideBar