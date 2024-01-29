import React from "react";
import {userProfileType} from "../../../redux/profileReducer";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from "./ProfileInfo.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}: InjectedFormProps<userProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <b>Full Name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking For a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professions
                    skills</b>: {createField('My professions skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>contacts</b>: {Object
                .keys(profile.contacts)
                .map(key => {
                    return <div key={key} className={style.contact}>
                        <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

export type ProfileDataFormPropsType = {
    profile: userProfileType
}


const ProfileDataFormReduxForm = reduxForm<userProfileType, ProfileDataFormPropsType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;

