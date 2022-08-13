import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post(props) {
    const { dogId } = useParams();
    const [postInfo, setPostInfo] = useState({
        header: "",
        category: "",
        imgSrc: "",
        text: ""
    });

    useEffect(() => {
        try {
            for (let i = 0; i < props.blogInfo.length; i++) {
                if (dogId === props.blogInfo[i].id) {
                    setPostInfo((prevInfo) => {
                        return {
                            ...prevInfo,
                            header: props.blogInfo[i].data.title,
                            text: props.blogInfo[i].data.text,
                            imgSrc: props.blogInfo[i].data.imageSrc,
                            category: props.blogInfo[i].data.category
                        };
                    });
                };
            };

        } catch (error) {
            // console.error(error)
        };
    }, [props.blogInfo])

    console.log(postInfo)

    return (
        <div className="post">
            <div className="post-img-container">
                <img className="post-img" src={postInfo.imgSrc} />
            </div>
            <div className="post-text-container">
                <h1 className="post-titel">{postInfo.header}</h1>
                <h3 className="post-sub">{postInfo.category}</h3>
                <p className="post-text">{postInfo.text}</p>
            </div>
        </div>
    );
};