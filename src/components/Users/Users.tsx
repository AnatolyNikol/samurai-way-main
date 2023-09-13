import React from "react";
import {userType} from "../../redux/usersReducer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user-profile-default.png'

type usersPropsType = {
    users: Array<userType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void
}

let Users = (props: usersPropsType) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

        // props.setUsers([
        //         {
        //             id: 1,
        //             photoUrl: 'https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png',
        //             followed: false,
        //             fullName: 'Dmitry',
        //             status: 'I am a boss',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //         {
        //             id: 2,
        //             photoUrl: 'https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png',
        //             followed: true,
        //             fullName: 'Sasha',
        //             status: 'I like football',
        //             location: {city: 'Moscow', country: 'Russia'}
        //         },
        //         {
        //             id: 3, photoUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png',
        //             followed: false, fullName: 'Bella', status: 'I am so pretty', location: {city: 'New-York', country: 'USA'}
        //         }
        //     ]
        // )
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        {/*<img src={user.photoUrl} className={style.userPhoto}/>*/}
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
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