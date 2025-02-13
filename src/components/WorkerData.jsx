import React from "react";
import { useParams } from 'react-router-dom';

const WorkerData = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            WorkerData
            <span>{id}</span>
        </div>
    )
}

export default WorkerData;