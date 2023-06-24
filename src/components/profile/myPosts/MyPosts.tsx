import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";


function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post message="Hi, how are you?" likeCounts={15}/>
                <Post message="It's my first post" likeCounts={20}/>
            </div>
        </div>
    )
}

export default MyPosts;