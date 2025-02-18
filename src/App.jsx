import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import WorkersList from './components/WorkersList';
import { fetchWorkers } from "./store/workersSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, useSearchParams } from 'react-router-dom';
import WorkerData from './components/WorkerData';
import { filterPositionAnalyst } from "./store/workersSlice";


const App = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const workers = useSelector(state => state.workers.workers);
    const [prof, setProf] = useState(''); // Это, наверное, не нужно
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch();

    // const postQuery = searchParams.get('post') || '';
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const query = form.search.value;
    //     setSearchParams({ post: query });
    // }

    const handlePosAnalyst = () => dispatch(filterPositionAnalyst(searchText));

    const handleSearch = (text) => {
        setSearchText(text);
        console.log(text);
        console.log(workers.filter(({ name, tag }) => [name, tag].some(field => field.includes(text))))
        return workers.filter(({ name, tag }) => [name, tag].some(field => field.includes(text)));
    }

    useEffect(() => {
        dispatch(fetchWorkers());
    }, [dispatch]);

    const filterOnPosition = text => {
        console.log(text);
        if (text === 'all') {
            return setProf('');
        }
        setProf(text);
        console.log(prof);
    }

    let filteredWorkers = workers;
    if (prof && !searchText) filteredWorkers = workers.filter(employee => employee.position === prof)
    else if (searchText) filteredWorkers = workers.filter(({ name, tag }) => [name, tag].some(field => field.includes(searchText)));
    else filteredWorkers = workers;

    return (
        <div className='refresh'>

            <BrowserRouter>

                <Route exact path='/'>
                    <Navigation
                        filterOnPosition={filterOnPosition}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        handleSearch={handleSearch}
                        handlePosAnalyst={handlePosAnalyst}
                    // handleSubmit={handleSubmit}
                    />
                </Route>
                <Route exact path='/'>
                    <WorkersList workers={filteredWorkers} />
                </Route>
                <Route path='/employee/:id'>
                    <WorkerData />
                </Route>
            </BrowserRouter>
        </div>
    )
};

export default App;
