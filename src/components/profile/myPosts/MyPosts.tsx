import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {ActionsTypes,PostsType} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
}


function MyPosts(props: MyPostsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        // if (text) {
        //     let action = UpdateNewPostTextActionCreator(text);
        //     props.dispatch(action)
        // }
        if (text) {
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder='type a text'
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;