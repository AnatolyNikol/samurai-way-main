import React, {ChangeEvent} from "react";
import style from "./ProfileInfo.module.css";
import {userProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-profile-default.png";

type profileInfoPropsType = {
    isOwner: boolean
    profile: userProfileType
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
}

function ProfileInfo(props: profileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement> ) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={style.imgContainer}></div>
            <div className={style.avatarContainer}>
                <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <span> {props.profile.fullName} </span>
                {/*ava + description*/}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;