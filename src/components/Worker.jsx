import React from 'react';
import { Link } from 'react-router-dom';

const Worker = ({ id, name, avatar, position }) => {

    return (
        <li>
            <div className="user">
                <div className="avatar">
                    <Link to='/d'>
                        <img src={avatar} alt="" style={{ "height": '74px', 'border-radius': '50%' }} />
                    </Link>
                </div>
                <div className='userInfo'>
                    <Link to={`/employee/${id}`}>{id} </Link>
                    <div className='userName'>{name}</div>
                    <div className='userPosition'>{position}</div>
                </div>
            </div>
        </li >
    )
}

export default Worker;