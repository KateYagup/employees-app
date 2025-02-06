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
                <a href="#" className="filterPosition" onClick={() => dispatch(filterPosition('designers'))} > Designers</a>
                <a href="#" className="filterPosition" onClick={() => dispatch(filterPosition('analyst'))}>Analyst</a>
                <a href="#" className="filterPosition" onClick={() => dispatch(filterPosition('managers'))}>Managers</a>
                <a href="#" className="filterPosition" onClick={() => dispatch(filterPosition('iO'))}>iO</a>
            </div>
        </div >
    )
}

export default Navigation;