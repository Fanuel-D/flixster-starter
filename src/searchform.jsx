import { useEffect, useState } from 'react'

function SearchForm() {
    const [searchQuery,setSearchQuery] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        setSearchQuery(event.target.value);
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='type movie name' onChange={handleSearchChange} value = {searchQuery}/>
            <button type="submit">Search</button>
        </form>
        </div>
   
    )
}

export default SearchForm