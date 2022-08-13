import React, { useState, useEffect } from "react";
import { firestore, auth } from "../firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";


export default function ArticleEditor() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            <Spinner />;
            return;
        }
        if (!user) navigate("/login");

    }, [user, loading]);

    const [articleData, setArticleData] = useState({
        title: "",
        category: "",
        text: "",
        imageSrc: ""
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setArticleData(prevArticleData => {
            return {
                ...prevArticleData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const collectionRef = collection(firestore, "dogs");
        addDoc(collectionRef, articleData).then(response => {
            console.log(response)
        })
        alert("Dodano artykuł")

        console.log(articleData)

    }

    return (
        <div className="article-editor">
            <form className="article-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={articleData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={articleData.category}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    placeholder="Text"
                    name="text"
                    value={articleData.text}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Image Link"
                    name="imageSrc"
                    value={articleData.imageSrc}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};