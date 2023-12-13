import React from "react";
import {DialogsPageType} from "../../redux/store";
import {AddMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    // updateNewMessageText: (message: string) => void
    addMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // updateNewMessageText: (message: string) => {
        //     dispatch(UpdateNewMessageTextActionCreator(message))
        // },
        addMessage: (newMessageBody: string) => {
            dispatch(AddMessageActionCreator(newMessageBody))
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

