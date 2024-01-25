import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    isOwner: boolean
    profile: userProfileType
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;