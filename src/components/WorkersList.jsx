import React, { useState, useEffect } from "react";
import Worker from "./Worker";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkers } from "../store/workersSlice";

// const workers = [{ "id": "1", "name": "Alex Minogarev", "position": "analyst", "birthDate": 634359835000, "phone": "+1-202-555-0100", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg", "tag": "am", "email": "alex.minogarev@example.com" },
// { "id": "2", "name": "Alice Ivanova", "position": "designer", "birthDate": 546019235000, "phone": "+1-202-555-0101", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "ai", "email": "alice.ivanova@example.com" }, { "id": "3", "name": "Andrew Ivanov", "position": "designer", "birthDate": 690548035000, "phone": "+1-202-555-0102", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg", "tag": "ai", "email": "andrew.ivanov@example.com" }, { "id": "4", "name": "Anna Ivanova", "position": "analyst", "birthDate": 727117235000, "phone": "+1-202-555-0103", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "ai", "email": "anna.ivanova@example.com" }, { "id": "5", "name": "Anna Smirnova", "position": "analyst", "birthDate": 742334435000, "phone": "+1-202-555-0104", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "as", "email": "anna.smirnova@example.com" }, { "id": "6", "name": "Dana Khamatova", "position": "manager", "birthDate": 835529635000, "phone": "+1-202-555-0106", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "dk", "email": "dana.khamatova@example.com" }, { "id": "7", "name": "Elena Nikitina", "position": "designer", "birthDate": 434859235000, "phone": "+1-202-555-0110", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "en", "email": "elena.nikitina@example.com" }, { "id": "8", "name": "Jackson Cole", "position": "android", "birthDate": 507349235000, "phone": "+1-202-555-0117", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1170.jpg", "tag": "jc", "email": "jackson.cole@example.com" }, { "id": "9", "name": "Maria Romano", "position": "analyst", "birthDate": 498349235000, "phone": "+1-202-555-0108", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "mr", "email": "maria.romano@example.com" }, { "id": "10", "name": "Oleg Ivanov", "position": "analyst", "birthDate": 498349235000, "phone": "+1-202-555-0115", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/998.jpg", "tag": "oi", "email": "oleg.ivanov@example.com" }, { "id": "11", "name": "Sophia Davis", "position": "manager", "birthDate": 490847235000, "phone": "+1-202-555-0118", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "sd", "email": "sophia.davis@example.com" }, { "id": "12", "name": "Svetlana Volkova", "position": "android", "birthDate": 494859235000, "phone": "+1-202-555-0112", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "sv", "email": "svetlana.volkova@example.com" }, { "id": "13", "name": "Tatiana Kuznetsova", "position": "designer", "birthDate": 528549235000, "phone": "+1-202-555-0114", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "tk", "email": "tatiana.kuznetsova@example.com" }, { "id": "14", "name": "Vlada Vain", "position": "manager", "birthDate": 806725435000, "phone": "+1-202-555-0105", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "vv", "email": "vlada.vain@example.com" }, { "id": "15", "name": "Vyacheslav Petrov", "position": "manager", "birthDate": 511845235000, "phone": "+1-202-555-0113", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/95.jpg", "tag": "vp", "email": "vyacheslav.petrov@example.com" }, { "id": "16", "name": "Yuri Smirnov", "position": "manager", "birthDate": 472849235000, "phone": "+1-202-555-0111", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg", "tag": "ys", "email": "yuri.smirnov@example.com" }, { "id": "17", "name": "Ekaterina Orlova", "position": "manager", "birthDate": 472849235000, "phone": "+1-202-555-0116", "avatar": "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg", "tag": "eo", "email": "ekaterina.orlova@example.com" }]

const WorkersList = ({ workers }) => {
    // const { status, error } = useSelector(state = state.workers);
    // const workers = useSelector(state => state.workers.workers);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchWorkers())
    // }, [dispatch]);
    return (
        <ul className="list" >
            WorkerList
            {workers.map(worker => (
                <Worker key={worker.id}
                    {...worker}
                // name={name}
                // avatar={worker.avatar}
                // position={worker.position}


                />
            ))}
        </ul>
    )
}

export default WorkersList;