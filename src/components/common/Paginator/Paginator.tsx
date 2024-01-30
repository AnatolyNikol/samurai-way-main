import style from "./Paginator.module.css";
import React, {useState} from "react";
import classNames from "classnames";

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}: Props) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classNames(style.pagesContainer)}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                // return <span className={currentPage === page
                //     ? style.selectedPage
                //     : style.page}
                    return <span className={classNames({[style.selectedPage]: currentPage === page}, style.page)}
                             onClick={(event) => {
                                 onPageChanged(page)
                             }}
                >
                            {page}
                        </span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}