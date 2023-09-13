import {ActionsTypes} from "./store";

type userLocationType = {
    city: string,
    country: string
}

export type userType = {
    id: number,
    // photoUrl: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    // fullName: string,
    name: string,
    status: string,
    location: userLocationType
}

export type usersType = {
    users: Array<userType>
}

let initialState = {
    users: []
}
export const usersReducer = (state: usersType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                ? {...user, followed: true}
                : user)
            };
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                ? {...user, followed: false}
                : user
                )
            };
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default:
            return state;
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unFollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

export const setUsersAC = (users: Array<userType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}