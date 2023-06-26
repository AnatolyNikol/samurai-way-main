import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";


function MyPosts() {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Hi, how are you?" likesCount={15}/>
                <Post message="It's my first post" likesCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;