import React from "react";
import Doge from "../images/doge.png"

export default function Footer() {
    return (
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">
                            <img src={Doge} className="navbar-icon" />
                            BloggyBlog</h5>
                        <p className="small text-muted">Your favorite dog blog!</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="article-link" href="#">BloggyBlog.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a className="article-link" href="#">Home</a></li>
                            <li><a className="article-link" href="#">Blog</a></li>
                            <li><a className="article-link" href="#">Contact</a></li>
                            <li><a className="article-link" href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Social media</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a className="article-link" href="#">Facebook</a></li>
                            <li><a className="article-link" href="#">Instagram</a></li>
                            <li><a className="article-link" href="#">Pinterest</a></li>
                            <li><a className="article-link" href="#">Linkedin</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small text-muted">Sign up into our newsletter for weekly updates, trending blog recomendations and exclusive discounts for dog products!</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};