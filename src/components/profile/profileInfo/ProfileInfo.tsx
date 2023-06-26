import React from "react";
import style from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div className={style.imgContainer}></div>
            <div className={style.avatarContainer}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;