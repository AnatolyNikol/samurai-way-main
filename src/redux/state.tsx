// let rerenderEntireTree = (state: StateType) => {};

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


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 1, message: 'It\'s my first post', likesCount: 20}
            ],
            newPostText: 'type a text'
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
            newMessageText: 'enter new message'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber (state: StateType) {},
    addPost() {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage () {
        let message = {id: 4, message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(message)
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }

}

// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 15},
//             {id: 1, message: 'It\'s my first post', likesCount: 20}
//         ],
//         newPostText: 'type a text'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valery'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Yo'}
//         ],
//         newMessageText: 'enter new message'
//     },
//     sidebar: {
//         friends: [
//             {id: 1, name: 'Andrey'},
//             {id: 2, name: 'Sveta'},
//             {id: 3, name: 'Sasha'}
//         ]
//     }
// }

// export const addPost = () => {
//     let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0};
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const addMessage = () => {
//     let message = {id: 4, message: state.dialogsPage.newMessageText}
//     state.dialogsPage.messages.push(message)
//     rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newMessageText: string) => {
//     state.dialogsPage.newMessageText = newMessageText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: (state: StateType) => void) => {
//     rerenderEntireTree = observer;
// }

export default store;