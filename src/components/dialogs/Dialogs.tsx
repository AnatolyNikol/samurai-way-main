import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valery" id="6"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

type DialogItemPropsType = {
    id: string
    name: string
}

function DialogItem(props: DialogItemPropsType) {

    let path = `/dialogs/${props.id}`

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Dialogs;