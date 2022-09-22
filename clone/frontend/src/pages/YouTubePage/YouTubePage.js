// General Imports 
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Axios 
import axios from "axios";

// Searchbar

// HardCoded Data

// Pages 

    // Need SearchResultsPage 
 // Need VideoPage 


// WE NEED A FUNCTION 
function YouTubePage() {
    const [videoResults, setVideoResults] =useState(hardCodedData);
    const navigate = useNavigate();

    if (process.env.NODE_ENV !== "production") {
        console.log("It's working!");
    }

    useEffect(() => {
        fetchResults("lotr");
    }, []);

    const fetchResults = async (searchTerm) => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search`,
                {
                    params: {
                        q: searchTerm,
                        key: process.env.REACT_APP_YT_API_KEY,
                        part: "snippet",
                        type: "video",
                        maxResults: 5,
                    },
                }
            );
            setVideoResults(response.data.items);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container">
            <SearchBar handleSearch={fetchResults} />
            <Routes>
                <Route
                    path="/"
                    element={<SearchResultsPage results={videoResults} />}
                />
                <Route path="/:videoId" element={<VideoPage />} />
            </Routes>
        </div>
    );
}

export default YouTubePage;
