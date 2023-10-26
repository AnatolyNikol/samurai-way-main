import {ActionsTypes, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

type userPhotosType = {
    small: string
    large: string
}

type userContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type userProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: userContactsType
    photos: userPhotosType
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: '',
    profile: {
        contacts: {
            facebook: "facebook.com",
            website: '',
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: '',
            github: "github.com",
            mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return  {
                ...state,
                newPostText: action.newText
            };
        }
        case 'SET-USER-PROFILE': {
            return  {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export const setUserProfile = (profile: userProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}