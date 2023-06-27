import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

function Profile() {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 1, message: 'It\'s my first post', likesCount: 20}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;