import React from "react";
import {userType} from "../../redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user-profile-default.png'

type usersPropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<usersPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={style.pagesContainer}>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page
                            ? style.selectedPage
                            : ''}
                        onClick={(event) => {this.onPageChanged(page)}}
                        >
                            {page}
                        </span>
                    })}
                </div>
                {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        {/*<img src={user.photoUrl} className={style.userPhoto}/>*/}
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userPhoto
                        }
                             className={style.userPhoto}
                        />
                    </div>
                </span>
                    <span>
                    <div>
                        {user.followed
                            ? <button onClick={() => this.props.unFollow(user.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/*<div>{user.location.country}</div>*/}
                        <div>{'user.location.country'}</div>
                        {/*<div>{user.location.city}</div>*/}
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}

export default Users;