import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements =  dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name="Dimych" id="1"/>*/}
                {/*<DialogItem name="Andrey" id="2"/>*/}
                {/*<DialogItem name="Sveta" id="3"/>*/}
                {/*<DialogItem name="Sasha" id="4"/>*/}
                {/*<DialogItem name="Viktor" id="5"/>*/}
                {/*<DialogItem name="Valery" id="6"/>*/}
            </div>
            <div className={style.messages}>
                {messagesElements}
                {/*<Message message="Hi"/>*/}
                {/*<Message message="How is your it-kamasutra?"/>*/}
                {/*<Message message="Yo"/>*/}
            </div>
        </div>
    )
}

type DialogItemPropsType = {
    id: number
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
    id: number
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Dialogs;