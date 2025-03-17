import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import SortWindow from "../SortWindow";
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = ({ filterOnPosition, searchText, handleSearch, sortList, setSortList }) => {

    const [visibleSortWindow, setVisibleSortWindow] = useState(false);
    const [activePosition, setActivePosition] = useState('2');
    const highlight = "filterPosition activeFilter";
    const positionsButtons = [
        { "id": "0", "pos": "All" },
        { "id": "1", "pos": "Designer" },
        { "id": "2", "pos": "Analyst" },
        { "id": "3", "pos": "Manager" },
        { "id": 4, "pos": "iO" },
        { "id": 5, "pos": "Android" },
    ];

    const handleActivePosition = (e) => {
        setActivePosition(e.target.value);
        console.log(e.target.value);
        filterOnPosition(positionsButtons[activePosition].pos.toLowerCase())
        console.log(positionsButtons[activePosition].pos.toLowerCase());
    }

    return (
        <div className='navigationBar'>
            <div className='navigation'>
                <div className='navigation__content'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43207 2.04543 6.24275 2.98756 4.61517 4.61514C2.98759 6.24272 2.04546 8.43203 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8481 21.6171 21.7737 21.71 21.68C21.8903 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9922 4.13453 9.63436C4.40463 8.2765 5.07131 7.02922 6.05028 6.05025C7.02925 5.07128 8.27653 4.4046 9.63439 4.1345C10.9923 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9498 15.9497C14.637 17.2625 12.8565 18 11 18Z" fill="#C3C3C6" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="navigation__text"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder='Введите имя, тэг, почту...'
                    />
                    <button className="menu" onClick={() => setVisibleSortWindow(true)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 6C3.30222 6 3.10888 6.05865 2.94443 6.16853C2.77998 6.27841 2.65181 6.43459 2.57612 6.61732C2.50043 6.80004 2.48063 7.00111 2.51922 7.19509C2.5578 7.38907 2.65304 7.56725 2.79289 7.70711C2.93275 7.84696 3.11093 7.9422 3.30491 7.98079C3.49889 8.01937 3.69996 7.99957 3.88268 7.92388C4.06541 7.84819 4.22159 7.72002 4.33147 7.55557C4.44135 7.39112 4.5 7.19778 4.5 7C4.5 6.73478 4.39464 6.48043 4.20711 6.29289C4.01957 6.10536 3.76522 6 3.5 6ZM7.5 8H21.5C21.7652 8 22.0196 7.89464 22.2071 7.70711C22.3946 7.51957 22.5 7.26522 22.5 7C22.5 6.73478 22.3946 6.48043 22.2071 6.29289C22.0196 6.10536 21.7652 6 21.5 6H7.5C7.23478 6 6.98043 6.10536 6.79289 6.29289C6.60536 6.48043 6.5 6.73478 6.5 7C6.5 7.26522 6.60536 7.51957 6.79289 7.70711C6.98043 7.89464 7.23478 8 7.5 8ZM7.5 11C7.30222 11 7.10888 11.0586 6.94443 11.1685C6.77998 11.2784 6.65181 11.4346 6.57612 11.6173C6.50043 11.8 6.48063 12.0011 6.51922 12.1951C6.5578 12.3891 6.65304 12.5673 6.79289 12.7071C6.93275 12.847 7.11093 12.9422 7.30491 12.9808C7.49889 13.0194 7.69996 12.9996 7.88268 12.9239C8.06541 12.8482 8.22159 12.72 8.33147 12.5556C8.44135 12.3911 8.5 12.1978 8.5 12C8.5 11.7348 8.39464 11.4804 8.20711 11.2929C8.01957 11.1054 7.76522 11 7.5 11ZM11.5 16C11.3022 16 11.1089 16.0586 10.9444 16.1685C10.78 16.2784 10.6518 16.4346 10.5761 16.6173C10.5004 16.8 10.4806 17.0011 10.5192 17.1951C10.5578 17.3891 10.653 17.5673 10.7929 17.7071C10.9327 17.847 11.1109 17.9422 11.3049 17.9808C11.4989 18.0194 11.7 17.9996 11.8827 17.9239C12.0654 17.8482 12.2216 17.72 12.3315 17.5556C12.4414 17.3911 12.5 17.1978 12.5 17C12.5 16.7348 12.3946 16.4804 12.2071 16.2929C12.0196 16.1054 11.7652 16 11.5 16ZM21.5 11H11.5C11.2348 11 10.9804 11.1054 10.7929 11.2929C10.6054 11.4804 10.5 11.7348 10.5 12C10.5 12.2652 10.6054 12.5196 10.7929 12.7071C10.9804 12.8946 11.2348 13 11.5 13H21.5C21.7652 13 22.0196 12.8946 22.2071 12.7071C22.3946 12.5196 22.5 12.2652 22.5 12C22.5 11.7348 22.3946 11.4804 22.2071 11.2929C22.0196 11.1054 21.7652 11 21.5 11ZM21.5 16H15.5C15.2348 16 14.9804 16.1054 14.7929 16.2929C14.6054 16.4804 14.5 16.7348 14.5 17C14.5 17.2652 14.6054 17.5196 14.7929 17.7071C14.9804 17.8946 15.2348 18 15.5 18H21.5C21.7652 18 22.0196 17.8946 22.2071 17.7071C22.3946 17.5196 22.5 17.2652 22.5 17C22.5 16.7348 22.3946 16.4804 22.2071 16.2929C22.0196 16.1054 21.7652 16 21.5 16Z" fill="#C3C3C6" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="positions">
                {/* <Link to='/?position=analyst'>
                    analyst
                </Link> */}

                {positionsButtons.map((pos) => {
                    return <button
                        className={pos.id == activePosition ? "filterPosition activeFilter" : "filterPosition"}
                        value={pos.id}
                        data-pos={pos.pos.toLocaleLowerCase()}
                        onClick={(e) => { setActivePosition(e.target.value); filterOnPosition(e.target.dataset.pos) }}
                    >
                        {pos.pos}
                    </button>
                })}
            </div>
            <div className="separatorLine"></div>
            {
                visibleSortWindow && <SortWindow
                    sortList={sortList}
                    setSortList={setSortList}
                    setVisibleSortWindow={setVisibleSortWindow}
                />
            }
        </div >
    )
}

export default Navigation;