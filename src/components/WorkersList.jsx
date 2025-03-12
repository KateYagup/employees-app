import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Worker from "./Worker";

import { useSelector, useDispatch } from "react-redux";
import { fetchWorkers } from "../store/workersSlice";

const WorkersList = ({ workers }) => {
    const [searchParams, useSearchParams] = useSearchParams();

    const postQuery = searchParams.get('position')
    // useEffect(() => {
    //     const position = searchParams.get('position');
    //     console.log(position);
    // }, [searchParams])

    return (
        <div>
            {/* <input type="text" value={searchParams.get('position')} /> */}
            <ul className="list" >
                {workers.map(worker => (
                    <Worker key={worker.id}
                        {...worker}
                    />
                ))}
            </ul>
        </div>
    )
}

export default WorkersList;