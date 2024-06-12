import MovieCard from './moviecard.jsx'
import './movielist.css'
import { useEffect, useState } from 'react'

import Modal from './modal.jsx'
function MovieList({data}){
    if (!data){
      return null
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)

    
    const handleSelectedCard = async (id) => {
      const apiKey = import.meta.env.VITE_API_KEY
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      const detailsResponse = await fetch(detailsUrl)
      const details = await detailsResponse.json()
      console.log(details)
      setModalOpen(true)
      setSelectedCard(details)
    }

    const handleClosed = (event) =>{
      event.stopPropagation()
      setModalOpen(false)
    }
  
    return(
      <div className='movieList'>
      {data.map((movie)=>{
        return (
          <div key = {movie.id}>
            <MovieCard movie = {movie} image={movie.poster_path} title={movie.original_title} rating = {movie.vote_average} onClickSelectedCard = {handleSelectedCard}/>
           
          </div>
        )
        }
      )}
       <Modal isOpen = {isModalOpen} selectedCardData = {selectedCard} selectData = {selectedCard} isClosed={handleClosed} />
      </div>
    
    )
  }

  export default MovieList