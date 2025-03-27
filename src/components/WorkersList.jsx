import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchWorkers } from "../store/workersSlice";
import { useSelector, useDispatch } from "react-redux";
import Worker from "./Worker";
import NothingFound from "./nothingFound/NothingFound"

const WorkersList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const workers = useSelector(state => state.workers.workers);
    const status = useSelector(state => state.workers.status);
    // const postQuery = searchParams.get('position')
    const dispatch = useDispatch();
    let copyWorkers = [...workers];

    useEffect(() => {
        dispatch(fetchWorkers());
    }, [searchParams, dispatch])

    const filteredWorkers = useMemo(() => {
        const { position: positionQuery, searchText, sortBy } = Object.fromEntries(searchParams);

        const filteredData = copyWorkers.filter(
            ({ position, name, tag, email }) =>
                (!positionQuery || position === positionQuery)
                &&
                (!searchText || [name, tag, email]
                    .some(field => field.includes(searchText)))
        )
        console.log('filteredData');
        console.log(filteredData.length);
        return sortBy ? filteredData.sort((a, b) => a.birthDate > b.birthDate ? 1 : -1)
            : filteredData
    }, [searchParams, workers])

    return (
        <div>
            {status === 'in progress' && <h1>Идет загрузка ...</h1>}
            {filteredWorkers.length === 0 && <NothingFound />}
            <ul className="list" >
                {filteredWorkers.map(worker => (
                    <Worker key={worker.id}
                        {...worker}
                    />
                ))}
            </ul>
        </div>
    )
}

export default WorkersList;