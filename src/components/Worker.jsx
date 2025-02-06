import React from 'react';

const Worker = ({ name, avatar, position }) => {
    console.log(avatar);
    return (
        <li>
            <div className="user">
                <div className="avatar">
                    <img src={avatar} alt="" style={{ "height": '74px', 'border-radius': '50%' }} />
                </div>
                <div className='userInfo'>
                    <div className='userName'>{name}</div>
                    <div className='userPosition'>{position}</div>
                </div>
            </div>
        </li>
    )
}

export default Worker;