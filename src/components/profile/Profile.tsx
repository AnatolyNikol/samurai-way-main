import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {PostsType} from "../../index";


// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }

type ProfilePropsType = {
    posts: Array<PostsType>
}

function Profile(props: ProfilePropsType) {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 15},
    //     {id: 1, message: 'It\'s my first post', likesCount: 20}
    // ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;