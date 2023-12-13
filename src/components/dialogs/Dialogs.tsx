import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsPropsType = {
    // updateNewMessageText: (message: string) => void
    addMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type AddFormDataType = {
    newMessageBody: string
}

function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )
    let messagesElements = state.messages.map(message =>
        <Message id={message.id} message={message.message}/>
    )


    // const addMessage = () => {
    //     props.addMessage();
    // }

    // const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let message = event.currentTarget.value
    //     if (message) {
    //         props.updateNewMessageText(message);
    //     }
    // }

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
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <textarea*/}
                {/*            placeholder='enter new message'*/}
                {/*            value={state.newMessageText}*/}
                {/*            onChange={onMessageChange} />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={addMessage}>Send</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<AddMessageForm/>*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props: InjectedFormProps<AddFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder='enter new message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)



export default Dialogs;