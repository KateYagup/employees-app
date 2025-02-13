import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Worker = ({ name, avatar, position }) => {
    // console.log(avatar);
    // let params = useParams();
    // const { id } = useParams();

    return (
        <li>
            <div className="user">
                <div className="avatar">
                    <Link to='/d'>
                        <img src={avatar} alt="" style={{ "height": '74px', 'border-radius': '50%' }} />
                    </Link>
                </div>
                <div className='userInfo'>
                    <Link to='/d'>id {id}</Link>
                    <div className='userName'>{name}</div>
                    <div className='userPosition'>{position}</div>
                </div>
            </div>
        </li >
    )
}

export default Worker;