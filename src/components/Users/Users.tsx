import style from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-default.png";
import React from "react";
import {userType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type usersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<userType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

function Users(props: usersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={style.pagesContainer}>
                {pages.map(page => {
                    return <span className={props.currentPage === page
                        ? style.selectedPage
                        : style.page}
                                 onClick={(event) => {
                                     props.onPageChanged(page)
                                 }}
                    >
                            {page}
                        </span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + user.id}>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userPhoto
                        }
                             className={style.userPhoto}
                        />
                            </NavLink>
                    </div>
                </span>
                <span>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(user.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;