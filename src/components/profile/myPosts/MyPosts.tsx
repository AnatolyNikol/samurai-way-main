import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: Array<PostsType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;