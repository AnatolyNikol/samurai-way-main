import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import profile from "../components/profile/Profile";
import {AppStateType, AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

export type userPhotosType = {
    small: string
    large: string
}

export type userContactsType = {
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
    aboutMe: string //
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: userContactsType
    photos: userPhotosType
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: userProfileType
    status: string
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    // newPostText: '',
    profile: {
        userId: 2,
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        contacts: {
            github: "github.com",
            vk: "vk.com/dimych",
            facebook: "facebook.com",
            instagram: "instagra.com/sds",
            twitter: "https://twitter.com/@sdf",
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            };
        }
        case "DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case "SAVE-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>


//actions
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
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

export const setUserStatus = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        status: status
    } as const
}

export const deletePost = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId
    } as const
}

export const savePhotoSuccess = (photos: any) => {
    return {
        type: 'SAVE-PHOTO-SUCCESS',
        photos
    } as const
}


//thunks
export const getUserProfile = (userId: string) => async (dispatch: AppThunkDispatch) => {
    const data = await usersAPI.getUserProfile(userId)

        .then(data => {
            dispatch(setUserProfile(data))
        })
}


export const getUserStatus = (userId: string) => async (dispatch: AppThunkDispatch) => {
    const data = await profileAPI.getStatus(userId)

        .then(data => {
            dispatch(setUserStatus(data))
        })
}


export const updateUserStatus = (status: string) => async (dispatch: AppThunkDispatch) => {

    const data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file: userPhotosType) => async (dispatch: AppThunkDispatch) => {
    const data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (formData: userProfileType) => async (dispatch: AppThunkDispatch, getState: () => AppStateType) => {
    const userId =  getState().auth.id
    const data = await profileAPI.saveProfile(formData)

    if (data.resultCode === 0) {
        dispatch(getUserProfile(JSON.stringify(userId)))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(data.messages[0])
    }
}

