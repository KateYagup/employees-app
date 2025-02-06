import React from "react";
import { useDispatch } from "react-redux";
import { filterPosition } from '../store/workersSlice';

const Navigation = () => {
    const dispatch = useDispatch();
    const handleAnalyst = () => {
        console.log('handleAnalyst');
    }

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
                <a href="#" className="filterPosition">Все</a>
                <a href="#" className="filterPosition">Designers</a>
                <a href="#" className="filterPosition" onClick={() => dispatch(filterPosition())}>Analyst</a>
                <a href="#" className="filterPosition">Managers</a>
                <a href="#" className="filterPosition">iO</a>
            </div>
        </div>
    )
}

export default Navigation;