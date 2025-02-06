import React from 'react';
import { Provider } from 'react-redux';
import Refresh from './components/Refresh';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Refresh />
        </Provider>
    )
};

export default App;
