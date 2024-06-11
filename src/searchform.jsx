import { useEffect, useState } from 'react'

function SearchForm({formUpdate}) {
    const [searchQuery,setSearchQuery] = useState("")


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event)=> {
        event.preventDefault()
        formUpdate(event.target.value)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Type movie name' onChange={handleSearchChange} value = {searchQuery}/>
                <button type="submit">Search</button>
            </form>
        </div>
   
    )
}

export default SearchForm