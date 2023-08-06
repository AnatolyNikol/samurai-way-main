import React from "react";
import {ActionsTypes, PostsType, StateType, StoreType} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MyPostsPropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}


// function MyPostsContainer(props: MyPostsPropsType) {
//
//     // let state = props.store.getState();
//
//     // const addPost = () => {
//     //     props.store.dispatch(addPostActionCreator())
//     // }
//     //
//     // const onPostChange = (text: string) => {
//     //     if (text) {
//     //         let action = UpdateNewPostTextActionCreator(text);
//     //         props.store.dispatch(action)
//     //     }
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     const onPostChange = (text: string) => {
//                         if (text) {
//                             let action = UpdateNewPostTextActionCreator(text);
//                             store.dispatch(action)
//                         }
//                     }
//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         // posts={state.profilePage.posts}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;