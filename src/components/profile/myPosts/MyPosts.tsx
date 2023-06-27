import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostsType} from "../Profile";


type MyPostsPropsType = {
    posts: Array<PostsType>
}

function MyPosts(props: MyPostsPropsType) {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 15},
    //     {id: 1, message: 'It\'s my first post', likesCount: 20}
    // ]

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