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

export type profilePageType = {
    posts: Array<PostsType>
}

export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

// let dialogs = [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Andrey'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valery'}
// ]
//
// let messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your it-kamasutra?'},
//     {id: 3, message: 'Yo'}
// ]
//
// let posts = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 15},
//     {id: 1, message: 'It\'s my first post', likesCount: 20}
// ]

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 1, message: 'It\'s my first post', likesCount: 20}
        ]
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
        ]
    }
}

export default state;