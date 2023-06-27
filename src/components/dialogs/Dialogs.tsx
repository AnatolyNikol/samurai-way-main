import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsType, MessagesType} from "../../index";


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

function Dialogs(props: DialogsPropsType) {

    // let dialogs = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Andrey'},
    //     {id: 3, name: 'Sveta'},
    //     {id: 4, name: 'Sasha'},
    //     {id: 5, name: 'Viktor'},
    //     {id: 6, name: 'Valery'}
    // ]
    //
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How is your it-kamasutra?'},
    //     {id: 3, message: 'Yo'}
    // ]

    let dialogsElements =  props.dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = props.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;