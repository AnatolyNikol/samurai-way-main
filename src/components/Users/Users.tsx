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

class Users extends React.Component<usersPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
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