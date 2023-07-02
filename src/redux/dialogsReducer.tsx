import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE' :
            let message = {id: 4, message: state.newMessageText}
            state.messages.push(message)
            state.newMessageText = '';
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export type AddMessageActionType = ReturnType<typeof AddMessageActionCreator>

export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextActionCreator>

export const AddMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const UpdateNewMessageTextActionCreator = (message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: message
    } as const
}