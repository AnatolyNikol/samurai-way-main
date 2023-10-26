import {ActionsTypes} from "./store";
import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

type userLocationType = {
    city: string,
    country: string
}

export type userType = {
    id: number,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    name: string,
    status: string,
    location: userLocationType
}


export type usersType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                users: action.users
            };
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

export type FollowActionType = ReturnType<typeof followSuccess>
export type UnfollowActionType = ReturnType<typeof unFollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingActionType = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}

export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

export const setUsers = (users: Array<userType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count: count
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


