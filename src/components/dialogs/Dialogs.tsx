import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {dialogsPageType, DialogsType, MessagesType} from "../../redux/state";



type DialogsPropsType = {
    state: dialogsPageType
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements =  props.state.dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = props.state.messages.map(message =>
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