import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unFollow, userType} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


type usersAPIPropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<usersAPIPropsType, any> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,  this.props.pageSize);
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    onPageChanged = (page: number) => {

        this.props.getUsers(page,  this.props.pageSize);
        // this.props.setCurrentPage(page)
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(page, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : null
            }

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);