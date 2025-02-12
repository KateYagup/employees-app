import React from "react";

const SortWindow = () => {
    return (
        <div className="sortWindow overlay">
            <div className="sortWindow__content">
                <div>
                    <span></span>
                    <h3>Сортировка</h3>
                </div>
                <div>
                    <input type="radio" />
                    <span>По алфавиту</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>По дню рождения</span>
                </div>
            </div>
        </div>
    )


}

export default SortWindow;