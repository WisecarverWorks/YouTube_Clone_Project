// General 
import React from "react";
// CSS
import "./SearchResultsPage.css";
// Components 
 // Need VideoList 

 const SearchResultsPage = ({ results }) => {
    return (
        <div>
            <div className="searchGrid">
                <VideoList videos={results} />
            </div>
        </div>
    );
};

export default SearchResultsPage; 