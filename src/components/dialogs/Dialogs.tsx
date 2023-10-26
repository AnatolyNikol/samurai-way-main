import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";


type DialogsPropsType = {
    updateNewMessageText: (message: string) => void
    addMessage: () => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage;

    let dialogsElements =  state.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )
    let messagesElements = state.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )


    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let message = event.currentTarget.value
        if (message) {
            props.updateNewMessageText(message);
        }
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

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
                            value={state.newMessageText}
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