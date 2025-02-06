import React from "react";
import { useDispatch } from "react-redux";

const Navigation = ({ filterOnPosition }) => {
    const dispatch = useDispatch();

    return (
        <div className='navigationBar'>
            <div className='statusBar block'>
                !!!
            </div>
            <div className='header'>
                <div className='content'>
                    <input type="text" />
                </div>
            </div>
            <div className='positions'>
                <a href="#" className="filterPosition" data-pos='all' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Все</a>
                <a href="#" className="filterPosition" data-pos='designer' onClick={(e) => filterOnPosition(e.target.dataset.pos)} > Designers</a>
                <a href="#" className="filterPosition" data-pos='analyst' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Analyst</a>
                <a href="#" className="filterPosition" data-pos='manager' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Managers</a>
                <a href="#" className="filterPosition" data-pos='android' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>iO</a>
                <a href="#" className="filterPosition" data-pos='android' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Android</a>
            </div>
        </div >
    )
}

export default Navigation;