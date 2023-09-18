import style from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-default.png";
import React from "react";
import {userType} from "../../redux/usersReducer";

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
                            ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>
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

export default Users;