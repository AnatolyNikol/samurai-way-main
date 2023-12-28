import React from "react";
import style from "./ProfileInfo.module.css";
import {userProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type profileInfoPropsType = {
    profile: userProfileType
    status: string
    updateUserStatus: (status: string) => void
}

function ProfileInfo(props: profileInfoPropsType) {

    if (!props.profile) {
        return  <Preloader/>
    }
    return (
        <div>
            <div className={style.imgContainer}></div>
            <div className={style.avatarContainer}>
                <img src={props.profile.photos.small}/>
                <span> {props.profile.fullName} </span>
                {/*ava + description*/}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;