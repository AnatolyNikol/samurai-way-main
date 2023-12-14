import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unFollow, userType} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type usersAPIPropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<usersAPIPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,  this.props.pageSize);
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page,  this.props.pageSize);
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

// let withRedirect = withAuthRedirect(UsersContainer);
//
// export default connect(mapStateToProps, {
//     follow,
//     unFollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers
// })(withRedirect);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }),
    // withAuthRedirect
)(UsersContainer)
