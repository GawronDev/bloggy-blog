import React, { useEffect } from "react";
import Doge from "../images/doge.png"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Navbar() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Doge} className="navbar-icon" />
                    BloggyBlog
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-justify" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <div className="seperator hide-on-mobile"></div>
                        <li className="nav-item">
                            {user ? <div className="nav-item">
                                <a href="/dashboard" className="nav-link">Dashboard</a>
                            </div>
                                : <a href="/login"><button className="login-button" >Sign in</button></a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};