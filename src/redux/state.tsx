import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profileReducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type FriendsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
//
// export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>

// export type AddMessageActionType  = ReturnType<typeof AddMessageActionCreator>
//
// export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextActionCreator>

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType


export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'}
            ]
        }
    },
    _callSubscriber(_state: StateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
        // if (action.type === 'ADD-POST') {
        //     let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === 'ADD-MESSAGE') {
        //     let message = {id: 4, message: this._state.dialogsPage.newMessageText}
        //     this._state.dialogsPage.messages.push(message)
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._state.dialogsPage.newMessageText = action.newMessageText
        //     this._callSubscriber(this._state)
        // }
    }
}

// export const addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     } as const
// }
// export const UpdateNewPostTextActionCreator = (text: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     } as const
// }

// export const AddMessageActionCreator = () => {
//     return {
//         type: 'ADD-MESSAGE'
//     } as const
// }
//
// export const UpdateNewMessageTextActionCreator = (message: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-TEXT',
//         newMessageText: message
//     } as const
// }


export default store;