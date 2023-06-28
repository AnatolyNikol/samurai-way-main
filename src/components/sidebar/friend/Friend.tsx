import React from "react";
import style from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
}

function Friend(props: FriendPropsType) {
    return (
        <div className={style.friendsContainer}>
            <div className={style.avatarContainer}></div>
            <span>{props.name}</span>
        </div>

    )
}

export default Friend;