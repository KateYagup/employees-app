import React, { useState } from "react";

const SortWindow = ({ sortList, setSortList }) => {
    const [value, setValue] = useState(1);

    function changeHandler(event) {
        setValue(event.target.value);
        setSortList(event.target.value);
        // console.log(sortList);
    }
    return (
        <div className="sortWindow overlay">
            <div className="sortWindow__content">
                <div>
                    <span></span>
                    <h3>Сортировка</h3>
                </div>
                <div>
                    <input
                        type="radio"
                        name="radio"
                        value="1"
                        checked={value === '1' ? true : false}
                        onChange={changeHandler}
                    />
                    <span>По алфавиту</span>
                </div>
                <div>
                    <input
                        type="radio"
                        name="radio"
                        value="2"
                        checked={value === '2' ? true : false}
                        onChange={changeHandler}
                    />
                    <span>По дню рождения</span>
                </div>
            </div>
        </div>
    )


}

export default SortWindow;