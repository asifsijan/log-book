import React, { Fragment, useEffect } from 'react';
import axios from '../axiosConfig';  
export default function Logs(props) {

    //GET LOGS
    const [logs, setLogs] = React.useState([]);
    let data = [];
    const getLogs = () => {
        axios.get('test-logs.json')
        .then((response=>{
            for (const key in response.data) {
                
                data.push({
                    value: response.data[key],
                    id: key
                });
            }
            
            setLogs(data);
        }))              
    }

    
    useEffect(() => {
        getLogs();
        console.log("reRender");
// eslint-disable-next-line react-hooks/exhaustive-deps
},[props.updateLog]);

    //UPDATE LOGS
    const [updateLog, setUpdateLog] = React.useState({
        id: '',
        excuses: '',
    });
    
    const handleOnChangeLog = (event) => {
        const { name, value } = event.target;
        setUpdateLog(prevUpdateLog => {
            return {
                ...prevUpdateLog,
                [name]: value
            }
        });
    }
    // const handleClickSubmit = (event) => {
    //     event.preventDefault();
    //     axios.put(`test-logs.json/${props.logUpdate.id}`, {
    //         ...props.logUpdate.value,
    //         excuses: excuses.excuses,
    //     })
    // }

    

  return (<div>

        {
            logs.map((val)=>(
                <Fragment key={val.id}>
                <p >{val.value.description}</p>

                {/* <p >{val.id}</p> */}
                <button onClick={()=>{
                    axios.delete(`test-logs/${val.id}.json`)
                    .then(res=>{
                        console.log(res);
                        props.logUpdate();
                    })
                    .catch(err=>console.log(err))

                }
                }>Delete
                </button>


                <form className='update'>
                    <input id={val.id} type="text" value={updateLog.excuses} name="excuses" placeholder={val.value.excuses} onChange={handleOnChangeLog}/>                    
                </form>


                </Fragment>
            ))
        }
      
  </div>);
}
