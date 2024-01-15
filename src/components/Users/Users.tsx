import React from "react";
import {userType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";


type usersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (page: number) => void
    users: Array<userType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

function Users(props: usersPropsType) {

    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}/>
            <div>
                {props.users.map(user => <User key={user.id}
                                               user={user}
                                               followingInProgress={props.followingInProgress}
                                               follow={props.follow}
                                               unFollow={props.unFollow}/>
                )}
            </div>
        </div>
    )
}

export default Users;