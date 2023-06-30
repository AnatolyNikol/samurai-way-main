import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    // addMessage: () => void
    // updateNewMessageText: (message: string) => void
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
        // props.addMessage();
        let action: ActionsTypes = {type: "ADD-MESSAGE"}
        props.dispatch(action)
    }

    const onMessageChange = () => {
        let message = newMessageText.current?.value
        if (message) {
            // props.updateNewMessageText(message)
            let action: ActionsTypes = {type: "UPDATE-MESSAGE-TEXT", newMessageText:message}
            props.dispatch(action)
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
                            ref={newMessageText}
                            value={props.state.newMessageText}
                            onChange={onMessageChange} />
                    </div>
                    <div>
                        <button onClick={addMessage}>add text</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;