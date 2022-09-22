// General
import React, { useState } from "react";
// Component 
// Hook
// Context 
// CSS 
import "./SearchBar.css";
// Utils
// Pages 

const SearchBar = ({ handleSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(search);
        setSearch("");
    };
    return (
        <form className="searchBar" onSubmit={handleSubmit}>
            <label> Search For Videos{""}</label>
            <br />
            <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit">Search!</button>
        </form>
    );
};

export default SearchBar;
