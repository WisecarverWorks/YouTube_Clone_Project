// General 
import React, { useContext } from "react";
//Need AuthContext useCustomForm 
// Link
import { Link } from "react-router-dom";
// CSS 
import "./LoginPage.css"; 

const LoginPage = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { username: "", password: "" };
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues,
        loginUser
    );

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password:{" "}
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                {isServerError ? (
                    <p className="error">Login failed, incorrect credentials!</p>
                ) : null}
                <Link to="/register">Click to register!</Link>
                <button>Login!</button>
            </form>
        </div>
    );
};

export default LoginPage;