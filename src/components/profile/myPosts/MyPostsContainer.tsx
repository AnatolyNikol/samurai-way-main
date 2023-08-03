import React from "react";
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



type MyPostsPropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}


function MyPostsContainer(props: MyPostsPropsType) {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        if (text) {
            let action = UpdateNewPostTextActionCreator(text);
            props.store.dispatch(action)
        }
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;