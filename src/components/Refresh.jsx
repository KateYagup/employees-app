import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import WorkersList from './WorkersList';
import { connect } from 'react-redux';
import { fetchWorkers } from "../store/workersSlice";
import { useSelector, useDispatch } from "react-redux";

const Refresh = () => {
    const workers = useSelector(state => state.workers.workers);
    const dispatch = useDispatch();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        dispatch(fetchWorkers());
        // setEmployees(workers);
    }, [dispatch]);

    const filterOnPosition = text => {
        console.log(text);
        if (text === 'all') {
            return setEmployees(workers);
        }
        const formPos = workers.filter(employee => employee.position === text);
        setEmployees(formPos);
    }

    return (
        <div className='refresh'>
            <Navigation filterOnPosition={filterOnPosition} />
            <WorkersList workers={employees} />
        </div>
    )
}


export default Refresh;