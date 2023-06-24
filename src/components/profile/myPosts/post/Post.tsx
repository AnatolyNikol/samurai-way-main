import React from "react";
import style from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCounts: number
}

function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <div className={style.avatarContainer}></div>
            {props.message}
            <div>
                <span>Like: {props.likeCounts}</span>
            </div>

        </div>
    )
}

export default Post;