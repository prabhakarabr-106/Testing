import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">MyApp</h1>

            <div className="nav-links">
                <Link to="/register">
                    <button className="btn register-btn">Register</button>
                </Link>

                <Link to="/login">
                    <button className="btn login-btn">Login</button>
                </Link> 
            </div>
        </nav>
    );
};

export default Navbar;