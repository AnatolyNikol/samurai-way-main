import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

function DialogItem(props: DialogItemPropsType) {

    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
            <div className={style.avatarContainer}></div>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;