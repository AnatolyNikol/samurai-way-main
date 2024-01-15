import style from "./Users.module.css";
import userPhoto from "../../assets/images/user-profile-default.png";
import React from "react";
import {userType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type userPropsType = {
    user: userType
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

function User({user, followingInProgress, unFollow, follow}: userPropsType) {
    return (
        <div>
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
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unFollow(user.id)
                            }}>
                                Unfollow
                            </button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>
                                Follow
                            </button>
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
        </div>)
}


export default User;