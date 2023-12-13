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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE' : {
            let message = {id: 4, message: action.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, message],
            };
        }
        default:
            return state;
    }
}

export type AddMessageActionType = ReturnType<typeof AddMessageActionCreator>

export const AddMessageActionCreator = (newMessageBody: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessageBody: newMessageBody
    } as const
}
