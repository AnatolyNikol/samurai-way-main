import {ActionsTypes, SidebarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
    return state;
}