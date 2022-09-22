// General imports 
import { Routes, Route } from "react-router-dom";
// CSS
import './App.css';
// Pages
  // We need Login, Register, SearchResultsPage, VideoPage, YouTubePage

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Hooks 

// Components 

import NavBar from "./components/NavBar/NavBar";
// Utils

import YouTubePage from "./pages/YouTubePage/YouTubePage";
// Context 


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" element={<YouTubePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

