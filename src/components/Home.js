import React from "react";
import { useState, useEffect } from 'react';
import Card from "./Card"
import { nanoid } from "nanoid";
import Shibas from "../images/2shibas.jpeg"

export default function Head(props) {
    const [cardsArr, setCardsArr] = useState();

    useEffect(() => {
        var tempArr = [];
        if(props.dogs){
            props.dogs.map((dog) => {
                tempArr.push(
                    <Card key={nanoid()} id={dog.id} titel={dog.data.title} category={dog.data.category} text={dog.data.text} sideways={false} img={dog.data.imageSrc}/>
                );
            });
        };
        tempArr = tempArr.slice(0, 3);
        setCardsArr(tempArr);
    }, [props.dogs])

    return (
        <div className="homepage">
            <div className="homepage-header">
                <div className="header-img-container">
                    <img className="header-img" alt="Two Shiba Inu dogs smiling" src={Shibas} />
                </div>
                <div className="header-text">
                    <h4 className="subtext">Dog care - July 22, 2022</h4>
                    <h1 className="main-article-header">How to take care of your cute little woofers on vacation?</h1>
                    <a className="article-link">Read article</a>
                </div>
            </div>
            <h2 className="trending">Trending</h2>
            <div className="card-container">
                {cardsArr}
            </div>
        </div>
    );
};