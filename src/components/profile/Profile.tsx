import React from "react";
import style from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

function Profile() {
    return (
        <div className={style.content}>
            <div className={style.imgContainer}></div>
            <div className={style.avatarContainer}>ava + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;