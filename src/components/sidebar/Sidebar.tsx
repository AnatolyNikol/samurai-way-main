import React from "react";
import style from './Sidebar.module.css'
import {SidebarType} from "../../redux/store";
import Friend from "./friend/Friend";

type SidebarPropsType = {
    state: SidebarType
}

function Sidebar(props: SidebarPropsType) {

    let friendsElements = props.state.friends.map(friend =>
        <Friend id={friend.id} name={friend.name}/>
    )

    return (
        <div className={style.sidebar}>
            {friendsElements}
        </div>
    )
}

export default Sidebar;