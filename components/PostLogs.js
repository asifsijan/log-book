import React from 'react';
import axios from '../axiosConfig'  
import { useState } from 'react';
export default function PostLogs(props) {
    
    const [input, setInput] = useState({
        description: '',
        task: '',
        time: '',
        excuses: '',
    });
    const handleOnChangeLog = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    const handleClickSubmit = (event) => {
        event.preventDefault();
        const newLog = {
            description: input.description,
            task: input.task,
            time: input.time,
            excuses: 'test',

        }
        axios.post("test-logs.json", newLog)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        setInput({
            description: '',
            task: '',
            time: '',
            excuses: '',
        });

        alert("Log Added Successfully");
        props.logUpdate()

    }
    return <>
        <form onSubmit={handleClickSubmit}>
            <input type="text" name="description" value={input.description} onChange={handleOnChangeLog} placeholder="Description" />
            <input type="text" name="task" value={input.task} onChange={handleOnChangeLog} placeholder="Task" />
            <input type="text" name="time" value={input.time} onChange={handleOnChangeLog} placeholder="Time" />
            <button type="submit" >Submit</button>
        </form>
    </>;
}
