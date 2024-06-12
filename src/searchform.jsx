import { useEffect, useState } from 'react'
import './searchForm.css'

function SearchForm({formUpdate}) {
    const [search,searchQuery] = useState("")


    const handleSearchChange = (event) => {
        searchQuery(event.target.value);
    };

    const handleSubmit = (event)=> {
        event.preventDefault()
        formUpdate(search)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Type movie name' onChange={handleSearchChange} value = {search}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm