import React from 'react';
import { Link } from 'react-router-dom';
import './worker.scss';
import moment from 'moment';
import { monthInRus } from '../../utils/dateUtils';

const Worker = ({ id, name, avatar, position, tag, birthDate, sortBy }) => {
  return (
    <div className="userWithBirth">
      <div className="user">
        <div className="user__avatar">
          <Link to="/d">
            <img src={avatar} alt="" style={{ height: '74px', 'border-radius': '50%' }} />
          </Link>
        </div>
        <div className=" user__description">
          <Link to={`/employee/${id}`} className="linkStyle">
            <div>
              <p className="user__name">
                {name} <span className="user__tag">{tag}</span>
              </p>
              <p className="user__position">{position}</p>
            </div>
          </Link>
        </div>
      </div>

      {sortBy && (
        <div className="userWithBirth__birth">
          <span className="user__birth">
            {moment(birthDate).format('DD')}{' '}
            {monthInRus[moment(birthDate).format('M') - 1].slice(0, 3)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Worker;
