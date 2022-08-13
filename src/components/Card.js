import React, { useEffect, useState } from "react";

export default function Card(props) {
    var styles = {
        flexDirection: "column",
    };

    const [summary, setSummary] = useState("");
    var imgStyle;
    var textStyle;
    var summaryStyle = {
        display: "none"
    }

    useEffect(() => {
        try {
            setSummary(
                props.text.slice(0,150) + "..."
            )
            console.log(summary);
        } catch (error) {
            console.error(error);
        }
    }, [props.text])


    if (props.sideways === true) {
        styles = {
            flexDirection: "row",
        };
        imgStyle = {
            flex: "50%"
        };
        summaryStyle = {
            display: "block"
        }
        textStyle = {
            display: "flex",
            flex: "50%",
            flexDirection: "column",
            justifyContent: "center"
        };
    };
    return (
        <div className="card" style={styles}>
            <div className="card-img-container" style={imgStyle}>
                <img className="card-img" src={props.img} alt="A dog picture" />
            </div>
            <div className="card-text" style={textStyle}>
                <h3 className="card-category">{props.category}</h3>
                <h1 className="card-titel">{props.titel}</h1>
                <p className="card-summary" style={summaryStyle}>{summary}</p>
                <a className="article-link" href={"/blog/" + props.id}>Read more</a>
            </div>
        </div>
    );
};