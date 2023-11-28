import React from "react";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

