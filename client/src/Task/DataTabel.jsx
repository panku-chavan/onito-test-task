import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
import { useNavigate } from 'react-router-dom';

const DataTabelComponent = () => {
    const [task, setTask] = useState([]);

    const navigate = useNavigate();

    const fetchTask = async () => {
        const response = await axios.get("/api/v1/task/get-task");
        // console.log(response.data.data)
        setTask(response.data.data)
    }
    useEffect(() => {
        fetchTask();
    }, [])
    // console.log(task)

    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        {
            name: "Age",
            selector: "age",
            sortable: true,
        },
        {
            name: "Sex",
            selector: "sex",
            sortable: true,
        },
        {
            name: "Mobile",
            selector: "mobile",
            sortable: true,
        },
        {
            name: "Address",
            selector: "address",
            sortable: true,
        },
        {
            name: "Govt ID Type",
            selector: "ID",
            sortable: true,
        },

        {
            name: "Govt ID",
            selector: "ID_value",
            sortable: true,
        },
        {
            name: "Guardian Details",
            selector: "guardian_name",
            sortable: true,
        },
        {
            name: "Nationality",
            selector: "nationality",
            sortable: true,
        },
    ];


    return (
        <div className="container-fluid">

            <div className='m-4 shadow rounded p-4'>

                <DataTable columns={columns} data={task} />

                <div className="d-flex justify-content-end">
                    <div className="" style={{ marginRight: "3rem" }}>
                        <button
                            className="btn btn-outline-secondary"
                            style={{
                                backgroundColor: "",
                                height: "50px",
                                width: "100px",
                                color: "",
                                marginTop: "10px"

                            }}
                            onClick={() => navigate("/")}
                        >
                            BACK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTabelComponent