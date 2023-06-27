import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    // posts: Array<PostsType>
    // state: StateType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;