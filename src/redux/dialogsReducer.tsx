import {ActionsTypes, DialogsPageType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE' : {
            let message = {id: 4, message: state.newMessageText}
            return {
                ...state,
                messages: [...state.messages, message],
                newMessageText: ''
            };
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
             return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
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