import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import style from "./preloader.module.css"

let Preloader = () => {
    return <img src={preloader} className={style.preloader}/>
}

export default Preloader;