import React from 'react';
import { Link } from 'react-router-dom';

const Worker = ({ id, name, avatar, position, tag }) => {

    return (
        <li>
            <div className="user">
                <div className="user__avatar">
                    <Link to='/d'>
                        <img src={avatar} alt="" style={{ "height": '74px', 'border-radius': '50%' }} />
                    </Link>
                </div>
                <div className=' user__description'>
                    {/* <Link to={`/employee/${id}`}>{id} </Link> */}
                    <Link to={`/employee/${id}`} className='linkStyle' >
                        <div >
                            <p className='user__name'>{name} <span className='user__tag'>{tag}</span></p>
                            <p className='user__position'>{position}</p>
                        </div>
                    </Link>
                </div>
            </div >
        </li >
    )
}

export default Worker;