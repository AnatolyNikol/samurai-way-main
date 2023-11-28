import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: userProfileType
    status: string
    updateUserStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;