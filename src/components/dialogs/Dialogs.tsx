import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../redux/store";
import {AddFormDataType, AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";


export type DialogsPropsType = {
    addMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    )
    let messagesElements = state.messages.map(message =>
        <Message key={message.id} id={message.id} message={message.message}/>
    )


    let addNewMessage = (values: AddFormDataType) => {
        props.addMessage(values.newMessageBody)
    }

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;