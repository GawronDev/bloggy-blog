import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Card from "./Card"

export default function BlogBrowser(props) {
    const [postList, setPostList] = useState();

    useEffect(() => {
        var tempArr = [];

        if (props.blogInfo) {
            props.blogInfo.map((dog) => {
                tempArr.push(
                    <Card key={nanoid()} id={dog.id} titel={dog.data.title} text={dog.data.text} category={dog.data.category} sideways={true} img={dog.data.imageSrc} />
                );
            });
        };
        setPostList(tempArr);

    }, [props.blogInfo]);

    return (
        <div className="homepage">
            <h1 className="homepage-header">Browse posts</h1>
            <div className="post-list-container">
                {postList}
            </div>
        </div>
    );
};