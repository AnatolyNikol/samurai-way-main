import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
}

function Dialogs(props: DialogsPropsType) {

    let newMessageText = React.createRef<HTMLTextAreaElement>()

    let dialogsElements =  props.state.dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = props.state.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )

    const addMessage = () => {
        let message = newMessageText.current?.value
        alert(message)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageText}></textarea>
                    <button onClick={addMessage}>add text</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;