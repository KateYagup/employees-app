import React from "react";
import { useSearchParams } from 'react-router-dom';

const Navigation = ({ filterOnPosition, searchText, handleSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = form.search.value;
        setSearchParams({ post: query });
    }

    return (
        <div className='navigationBar'>
            <div className='statusBar block'>
                Поиск
            </div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type="search" name="search" />
                <input type="submit" value="Search" />
            </form>
            <div className='header'>
                <div className='content'>
                    <div className="search"> </div>
                    <input type="text"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className="menu" > </div>
                </div>
            </div>
            <div className='positions'>
                <a href="#" className="filterPosition" data-pos='all' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Все</a>
                <a href="#" className="filterPosition" data-pos='designer' onClick={(e) => filterOnPosition(e.target.dataset.pos)} > Designers</a>
                <a href="#" className="filterPosition" data-pos='analyst' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Analyst</a>
                <a href="#" className="filterPosition" data-pos='manager' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Managers</a>
                <a href="#" className="filterPosition" data-pos='android' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>iO</a>
                <a href="#" className="filterPosition" data-pos='android' onClick={(e) => filterOnPosition(e.target.dataset.pos)}>Android</a>
            </div>
        </div >
    )
}

export default Navigation;