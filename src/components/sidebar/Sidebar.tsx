import React from "react";
import style from './Sidebar.module.css'
import {FriendsType, SidebarType} from "../../redux/store";
import Friend from "./friend/Friend";

type SidebarPropsType = {
    sidebar: SidebarType
}

function Sidebar(props: SidebarPropsType) {

    let state = props.sidebar

    let friendsElements = state.friends.map(friend =>
        <Friend  key={friend.id} id={friend.id} name={friend.name}/>
    )

    return (
        <div className={style.sidebar}>
            {friendsElements}
        </div>
    )
}

export default Sidebar;