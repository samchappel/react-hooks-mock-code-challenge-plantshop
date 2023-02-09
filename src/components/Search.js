import React, { useState } from "react";

function Search({ setSearchTerm }) {

  const [searchInput, setSearchInput ] = useState("")

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => {
          console.log("Searching...")
          setSearchInput(e.target.value)
          setSearchTerm(e.target.value)
        //onChange={(e) => updateSearchTerm(e.target.value)}
        }}
      />
    </div>
  );
}

export default Search;
