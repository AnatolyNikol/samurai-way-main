import {ActionsTypes, ProfilePageType} from "./store";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const UpdateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}