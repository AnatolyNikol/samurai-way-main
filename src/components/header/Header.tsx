import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null,
    isAuth: boolean,
    logout: () => void
}


function Header(props: HeaderPropsType) {
    return (
        <header className={style.header}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/007/636/859/original/community-logo-design-free-vector.jpg"
                alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;