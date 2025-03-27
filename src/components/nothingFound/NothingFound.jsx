import React from "react";
import './nothingFound.scss';

const NothingFound = () => {
    return (
        <div className="nothing_page">
            <img src="search.png" alt="Картинка не отображается" width="100px" height="100px" />
            <div> <span className="nobody">Мы никого не нашли</span></div>
            <div><span className="query">Попробуй скорректировать запрос</span></div>
        </div>
    )
}

export default NothingFound;