import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {ActionsTypes, PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: Array<PostsType>
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
            // props.addPost()
        let action:ActionsTypes = {type: 'ADD-POST'}
        props.dispatch(action)
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            let action:ActionsTypes = {
                type: 'UPDATE-NEW-POST-TEXT',
                newText: text}
            // props.updateNewPostText(text)
            props.dispatch(action)
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;