import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import WorkersList from './WorkersList';
import { connect } from 'react-redux';
import { fetchWorkers } from "../store/workersSlice";
import { useSelector, useDispatch } from "react-redux";

const Refresh = () => {
    const workers = useSelector(state => state.workers.workers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWorkers())
    }, [dispatch]);

    return (
        <div className='refresh'>
            <Navigation />
            <WorkersList workers={workers} />
        </div>
    )
}


export default Refresh;