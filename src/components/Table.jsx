import React, { useEffect, useState } from 'react'
import { Table } from "antd"
import axios from 'axios'

const baseUrl = `https://tracking.bosta.co/shipments/track`

export const GetTableData = async (id) => {
    let Obj = {
        data: "",
        status: true
    }

    let { data } = await axios.get(`${baseUrl}/${id}`);
    Obj.data = data
    Obj.status = true
    return Obj
}


const dataSource = [
    {
        key: '1',
        Branch: 'فرع مدينه نصر',
        Date: "05/04/2024",
        Time: '12:00 pm',
        Details: "تم إنشاء الشحنه"
    },
    {
        key: '2',
        Branch: 'فرع مدينه نصر',
        Date: "05/04/2024",
        Time: '12:00 pm',
        Details: "تم إنشاء الشحنه من التاجر"
    },
    {
        key: '3',
        Branch: 'فرع مدينه نصر',
        Date: "05/04/2024",
        Time: '12:00 pm',
        Details: "الشحنه خرجت للتسليم"
    },
    {
        key: '4',
        Branch: 'فرع مدينه نصر',
        Date: "05/04/2024",
        Time: '12:00 pm',
        Details: "لم يتم تسليم الشحنه"
    },
];

const columns = [
    {
        title: 'Branch',
        dataIndex: 'Branch',
        key: 'Branch',
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
    },
    {
        title: 'Time',
        dataIndex: 'Time',
        key: 'Time',
    }, {
        title: "Details",
        dataIndex: "Details",
        key: "Details"

    }
];




export default function DataTable() {
    let [data1, setData] = useState()

    async function getTable(id) {
        const { data } = await GetTableData(id);
        let dataArr = data.TransitEvents

        const filteredArray = filterByHubKey(dataArr);
        setData(filteredArray)     

    }

    const filterByHubKey = (array) => {
        return array.filter(item => item.hasOwnProperty('hub'));
    };

    useEffect(() => {
        getTable("40106705")      
    }, [])
    return (
        <>
            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}
