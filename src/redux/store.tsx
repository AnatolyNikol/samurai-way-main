import {
    AddPostActionType, SetUserStatusActionType,
    profileReducer,
    SetUserProfileActionType,
    userProfileType, DeletePostActionType, SavePhotoSuccessActionType,
} from "./profileReducer";
import {AddMessageActionType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    FollowActionType,
    setCurrentPageActionType, toggleIsFetchingActionType, setTotalUsersCountActionType,
    SetUsersActionType,
    UnfollowActionType, toggleIsFollowingActionType
} from "./usersReducer";
import {SetCaptchaUrlActionType, SetUserDataActionType} from "./auth-reducer";

type PostsType = {
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

type ProfilePageType = {
    posts: Array<PostsType>
    // newPostText: string
    profile: userProfileType
    status: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    // newMessageText: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    AddPostActionType
    // | UpdateNewPostTextActionType
    | AddMessageActionType
    // | UpdateNewMessageTextActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | toggleIsFollowingActionType
    | SetUserStatusActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType
    | SetCaptchaUrlActionType


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
            // newPostText: '',
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
                aboutMe: '',
                photos: {
                    small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                },
            },
            status: ''
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
            // newMessageText: ''
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
    }
}

export default store;