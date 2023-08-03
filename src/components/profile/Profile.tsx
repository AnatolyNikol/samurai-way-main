import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./myPosts/MyPostsContainer";

type ProfilePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
            {/*<MyPosts*/}
            {/*    posts={props.profilePage.posts}*/}
            {/*    newPostText={props.profilePage.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    )
}

export default Profile;