import React, { useState, useEffect } from "react";
import Worker from "./Worker";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkers } from "../store/workersSlice";

const WorkersList = ({ workers }) => {
    return (
        <ul className="list" >
            {workers.map(worker => (
                <Worker key={worker.id}
                    {...worker}
                />
            ))}
        </ul>
    )
}

export default WorkersList;