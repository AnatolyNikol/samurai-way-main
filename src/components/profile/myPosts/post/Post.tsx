import React from "react";
import style from "./Post.module.css";


function Post() {
    return (
        <div className={style.item}>
            <div className={style.avatarContainer}></div>
            Post 1
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post;