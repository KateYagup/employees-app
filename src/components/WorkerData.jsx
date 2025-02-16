import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import moment from 'moment';

const WorkerData = () => {
    const { filterOnPosition } = useParams();
    const { id } = useParams();
    const employee = useSelector((state) =>
        state.workers.workers.find((worker) => worker.id === id));
    console.log(employee);
    const { name, phone, birthDate } = employee;
    // const age = moment(birthDate, 'YY').fromNow();
    const age = moment(moment()).diff(birthDate, 'years');
    const birthDay = moment(birthDate).format('YYYY-M-DD');
    // const month = new Date(birthDate);
    const month = moment(birthDate).format('M');
    const year = moment(birthDate).format('YYYY');
    const date = moment(birthDate).format('DD');
    console.log(month);

    const monthInRus = [
        'декабря', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября',
    ]

    return (
        <div>
            WorkerData
            <span>{id}</span>
            <span>{name}</span>
            <span>{phone}</span>
            <div>{age}</div>
            <div className='employee__birth'>
                <div> <span>{date}</span><span>{monthInRus[month]}</span><span>{year}</span> </div>
                <div>{age} <span>{age < 25 ? 'года' : 'лет'}</span> </div>
            </div>
        </div>
    )
}

export default WorkerData;