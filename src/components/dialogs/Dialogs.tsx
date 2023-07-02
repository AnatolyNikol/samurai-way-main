import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";



type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsPropsType) {

    // let newMessageText = React.createRef<HTMLTextAreaElement>()

    let dialogsElements =  props.state.dialogs.map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    let messagesElements = props.state.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )

    const addMessage = () => {
        // let action: ActionsTypes = {type: "ADD-MESSAGE"}
        props.dispatch(AddMessageActionCreator())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // let message = newMessageText.current?.value
        let message = event.currentTarget.value
        if (message) {
            // let action: ActionsTypes = {type: "UPDATE-MESSAGE-TEXT", newMessageText:message}
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
                            // ref={newMessageText}
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