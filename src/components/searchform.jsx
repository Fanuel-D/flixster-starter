import { useEffect, useState } from "react";
import "../styles/searchForm.css";

function SearchForm({ formUpdate }) {
  const [search, searchQuery] = useState("");

  const handleSearchChange = (event) => {
    searchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formUpdate(search);
  };

  return (
    <form className="searchForm" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type movie name"
        onChange={handleSearchChange}
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
