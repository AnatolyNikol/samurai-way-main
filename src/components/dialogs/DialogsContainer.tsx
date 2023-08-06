import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    // state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

function DialogsContainer(props: DialogsPropsType) {

    // let state = props.store.getState().dialogsPage;
    //
    // const addMessage = () => {
    //     props.store.dispatch(AddMessageActionCreator())
    // }
    //
    // const onMessageChange = (message: string) => {
    //     // let message = event.currentTarget.value
    //     if (message) {
    //         props.store.dispatch(UpdateNewMessageTextActionCreator(message))
    //     }
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState().dialogsPage;

                const addMessage = () => {
                    store.dispatch(AddMessageActionCreator())
                }

                const onMessageChange = (message: string) => {
                    if (message) {
                        store.dispatch(UpdateNewMessageTextActionCreator(message))
                    }
                }
                return <Dialogs
                    state={state}
                    updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;