import React from 'react';
import Navigation from './components/navigation/Navigation';
import WorkersList from './components/workersList/WorkersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkerData from './components/workerData/WorkerData';

const App = () => {
  return (
    <div className="refresh">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <WorkersList />
              </>
            }
          />
          <Route path="/employee/:id" element={<WorkerData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
