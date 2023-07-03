import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";



type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements =  props.state.dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = props.state.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )

    const addMessage = () => {
        props.dispatch(AddMessageActionCreator())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let message = event.currentTarget.value
        if (message) {
            props.dispatch(UpdateNewMessageTextActionCreator(message))
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            placeholder='enter new message'
                            value={props.state.newMessageText}
                            onChange={onMessageChange} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;