import React, {ChangeEvent, useState} from "react";
import style from "./ProfileInfo.module.css";
import {userContactsType, userProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-profile-default.png";
import ProfileDataForm from "./ProfileDataForm";

type profileInfoPropsType = {
    isOwner: boolean
    profile: userProfileType
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (formData: userProfileType) => Promise<any>
}

function ProfileInfo(props: profileInfoPropsType) {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: userProfileType) => {
        props.saveProfile(formData)
            .then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div className={style.imgContainer}></div>
            <div className={style.avatarContainer}>
                <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => setEditMode(true)}/>
                }
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

type ProfileDataType = {
    profile: userProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataType) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking For a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professions skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>contacts</b>: {Object
                .keys(profile.contacts)
                .map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof userContactsType]}/>
                })}
            </div>
        </div>
    )
}


type ContactType = {
    contactTitle: string
    contactValue: string
}

export const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;