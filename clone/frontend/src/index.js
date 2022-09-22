// General
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Component 
// Hook
// Context 
import { AuthProvider } from './context/AuthContext';
// CSS 
// Utils
// Pages 
// We need Auth Provider 

// Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
