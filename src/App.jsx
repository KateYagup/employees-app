import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';

import NothingFound from './components/nothingFound/NothingFound';
import WorkersList from './components/WorkersList';
import { fetchWorkers } from "./store/workersSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import WorkerData from './components/workerData/WorkerData';

const App = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const workers = useSelector(state => state.workers.workers);
    const [prof, setProf] = useState('');
    const [searchText, setSearchText] = useState('');
    const [sortList, setSortList] = useState('1');
    const dispatch = useDispatch();

    // const postQuery = searchParams.get('post') || '';
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const query = form.search.value;
    //     setSearchParams({ post: query });
    // }
    useEffect(() => {
        dispatch(fetchWorkers());
    }, [dispatch]);


    const handleSearch = (text) => {
        setSearchText(text);
    }

    const filterOnPosition = text => {
        if (text === 'all') {
            return setProf('');
        }
        setProf(text);
    }

    let filteredWorkers;
    if (sortList === '2') {
        let copy = [...workers];
        filteredWorkers = copy
            .sort((a, b) => a.birthDate > b.birthDate ? 1 : -1);
    } else if (sortList === '1') {
        filteredWorkers = workers;
    }


    if (prof && !searchText) filteredWorkers = workers
        .filter(employee => employee.position === prof)
    else if (searchText) filteredWorkers = workers
        .filter(({ name, tag }) => [name, tag].some(field => field.includes(searchText)))
    else filteredWorkers = workers;

    console.log(filteredWorkers);
    let showNothinFound = false;
    if (filteredWorkers.length === 0) { showNothinFound = true }

    return (
        <div className='refresh'>
            {showNothinFound && <NothingFound />}
            <BrowserRouter>
                <Routes>
                    <Route exact path='/'
                        element={<Navigation
                            filterOnPosition={filterOnPosition}
                            searchText={searchText}
                            setSearchText={setSearchText}
                            handleSearch={handleSearch}
                            sortList={sortList}
                            setSortList={setSortList}
                        // handleSubmit={handleSubmit}
                        />}
                    />
                    {/* {showNothinFound && <NothingFound />} */}
                    <Route path='/'
                        element={
                            <WorkersList workers={filteredWorkers} />
                        }
                    />
                    <Route path='/employee/:id' element={<WorkerData />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
