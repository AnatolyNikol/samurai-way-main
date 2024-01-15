import style from "./Paginator.module.css";
import React from "react";

type Props = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: Props) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.pagesContainer}>
            {pages.map(page => {
                return <span className={currentPage === page
                    ? style.selectedPage
                    : style.page}
                             onClick={(event) => {
                                 onPageChanged(page)
                             }}
                >
                            {page}
                        </span>
            })}
        </div>
    )
}