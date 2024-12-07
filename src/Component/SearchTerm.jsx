import React from "react";
import { useState } from "react";

const SearchTerm = ({onSearch}) => {
    const [SearchTerm, setSearchTerm] = useState('');

    const handleSearch = () =>{
        if(SearchTerm){
        onSearch(SearchTerm);
        }
    }

  return (
    <div className="container">
      <h1>My MOVIES!</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search For A Movie...."
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {Error && <p>{Error}</p>}
    </div>
  );
};

export default SearchTerm;
