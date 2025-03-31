import React from 'react';
import { Oval } from 'react-loader-spinner';
import './spinner.scss';

const Spinner = () => {
    return (
        <div className='spinner'>
            <Oval color='grey'
                height="200"
                width="200"
            />
        </div>
    )
}

export default Spinner;
