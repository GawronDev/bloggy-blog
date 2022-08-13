import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import LoadingSpinner from "./components/Spinner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Post from "./components/Post";
import BlogBrowser from "./components/BlogBrowser";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import ArticleEditor from "./components/ArticleEditor";
import { useState, useEffect } from 'react';
import { firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./master.css";


export default function App() {
    const [dogsInfo, setDogsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const dogsCollectionRef = collection(firestore, 'dogs');
        getDocs(dogsCollectionRef)
            .then(response => {
                const dogs = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setDogsInfo(dogs);
                setIsLoading(false);
            })
            .catch(error => console.log(error.message))
    }, [])

    return (
        <Router>
            <div className="home">
                <Navbar />
                {isLoading ?
                    <LoadingSpinner /> :
                    <Routes>
                        <Route path="/" element={<Home dogs={dogsInfo} />}></Route>
                        <Route path="/blog" element={<Blog blogInfo={dogsInfo} />}>
                            <Route path="/blog/" element={<BlogBrowser blogInfo={dogsInfo} />} />
                            <Route path=":dogId" element={<Post blogInfo={dogsInfo} />} />
                        </Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/article-editor" element={<ArticleEditor />}></Route>
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/reset" element={<Reset />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                    </Routes>
                }
                <Footer />
            </div>
        </Router>
    );
};