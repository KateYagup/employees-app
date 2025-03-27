import React from 'react';
import Navigation from './components/navigation/Navigation';
import WorkersList from './components/WorkersList';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import WorkerData from './components/workerData/WorkerData';


const App = () => {
    return (
        <div className='refresh'>
            {/* {showNothinFound && <NothingFound />} */}
            <BrowserRouter>
                <Routes>
                    <Route path='/'
                        element={
                            <>
                                <Navigation />
                                <WorkersList />
                            </>
                        }
                    />
                    <Route path='/employee/:id' element={<WorkerData />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
