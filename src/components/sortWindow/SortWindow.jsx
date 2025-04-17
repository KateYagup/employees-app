import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './sortWindow.scss';

const SortWindow = ({ setVisibleSortWindow }) => {
  const [value, setValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = e => {
    setValue(event.target.value);
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      if (e.target.value == '1') {
        params.delete('sortBy');
      } else if (e.target.value == '2') {
        params.set('sortBy', 'byBirth');
      }
      console.log('params');
      console.log(params.toString());
      return params;
    });
  };

  return (
    <div className="sortWindow overlay">
      <div className="sortWindow__content">
        <div>
          <h3 className="sortWindow__header">Сортировка </h3>
          <button className="btn-close" onClick={() => setVisibleSortWindow(false)}>
            &times;
          </button>
        </div>
        <div className="sortWindow__option">
          <input
            className="sortWindow__radio"
            type="radio"
            name="radio"
            value="1"
            checked={value === '1' ? true : false}
            onChange={e => {
              handleSort(e);
            }}
          />
          <span className="sortWindow__option-text">По алфавиту</span>
        </div>
        <div className="sortWindow__option">
          <input
            className="sortWindow__radio"
            type="radio"
            name="radio"
            value="2"
            checked={value === '2' ? true : false}
            onChange={e => {
              handleSort(e);
            }}
          />
          <span className="sortWindow__option-text">По дню рождения</span>
        </div>
      </div>
    </div>
  );
};

export default SortWindow;
