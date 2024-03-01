import { Card, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'completed', headerName: 'Completed', flex: 1 },
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'todo', headerName: 'Todo', flex: 2 },
    { field: 'userId', headerName: 'User ID', flex: 1 },
];


const Data = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodo() {
            try {
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                setTodos(data[0].todos);  // Extract the 'todos' array from the data
            } catch (error) {
                console.log(error);
            }
        }

        fetchTodo();
    }, []);

    console.log(todos);

    return (
        <Card>
            <CardHeader title='ToDo LiSt'></CardHeader>
            <DataGrid columns={columns} rows={todos}/>
        </Card>
    );
}

export default Data;
