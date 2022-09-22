// General
import React from "react";
import { useNavigate, Link } from "react-router-dom";
// Component 
// Hook
// Context 
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
// CSS 
import "./NavBar.css";
// Utils
// Pages 

const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="navBar">
            <ul>
                <li className="brand">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <b>WisecarverTube.Texas {user ? user.username : null}</b>
                    </Link>
                </li>
                <li>
                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <button onClick={() => navigate("/login")}>Login</button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
