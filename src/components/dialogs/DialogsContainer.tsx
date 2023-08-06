import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsTypes, DialogsPageType, StateType, StoreType} from "../../redux/store";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type DialogsPropsType = {
    // state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

// function DialogsContainer(props: DialogsPropsType) {
//
//     // let state = props.store.getState().dialogsPage;
//     //
//     // const addMessage = () => {
//     //     props.store.dispatch(AddMessageActionCreator())
//     // }
//     //
//     // const onMessageChange = (message: string) => {
//     //     // let message = event.currentTarget.value
//     //     if (message) {
//     //         props.store.dispatch(UpdateNewMessageTextActionCreator(message))
//     //     }
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                 let state = store.getState().dialogsPage;
//
//                 const addMessage = () => {
//                     store.dispatch(AddMessageActionCreator())
//                 }
//
//                 const onMessageChange = (message: string) => {
//                     if (message) {
//                         store.dispatch(UpdateNewMessageTextActionCreator(message))
//                     }
//                 }
//                 return <Dialogs
//                     state={state}
//                     updateNewMessageText={onMessageChange}
//                     addMessage={addMessage}
//                     dialogsPage={state}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageText: (message: string) => void
    addMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (message: string) => {
            dispatch(UpdateNewMessageTextActionCreator(message))
        },
        addMessage: () => {
            dispatch(AddMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;