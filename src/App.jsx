import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import WorkersList from './components/WorkersList';
import { fetchWorkers } from "./store/workersSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import WorkerData from './components/WorkerData';


const App = () => {
    const workers = useSelector(state => state.workers.workers);
    const [prof, setProf] = useState('');
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch();

    const handleSearch = (text) => {
        setSearchText(text);
        console.log(text);
        console.log(workers.filter(({ name, tag }) => [name, tag].some(field => field.includes(text))))
        // console.log(workers.filter(worker => worker.name.includes(text)));
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

    // const filteredWorkers = prof ? workers.filter(employee => employee.position === prof) : workers;

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



// import React from 'react';
// import { Provider } from 'react-redux';
// import Refresh from './components/Refresh';
// import store from './store';

// const App = () => {
//     return (
//         <Provider store={store}>
//             <Refresh />
//         </Provider>
//     )
// };



export default App;
