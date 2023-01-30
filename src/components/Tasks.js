import { color, style } from '@mui/system';
import React, { useContext } from 'react'
import taskContext from '../context/taskContext'

const Tasks = ({task,id,status,date,iconIndex,empty}) => {

  const {updateTask,deleteTask,activity}=useContext(taskContext);

  const onListClickHandler=()=>{
    updateTask(id);
  }
  
  return (
      <div className='task-div' style={{background:status && !empty?"#f93d3d9d":"#f2dcf89b"}}>
        <div className="task-head" >
          <i className={`fa-solid ${activity[iconIndex].icon}`} style={{color:activity[iconIndex].color}}  />
          <span className="icon-type" style={{color:status?"black":"gray"}}>{activity[iconIndex].name}</span>
          {status && !empty?<i className="fa-solid fa-trash" onClick={()=> deleteTask(id)}></i>:""}
          <abbr title={`Date: ${date.substring(0,10)}\nStatus: ${status?"Completed":"Pending"}`}><i className="fa-solid fa-circle-info"></i></abbr>
        </div>
        <div className="task-body">
        <i className="fa-solid fa-check" onClick={onListClickHandler} style={{background:status?"black":"transparent",color:status?"white":"black"}}></i> <span style={{textDecoration:status && !empty?"line-through":""}}>{task}</span> 
        </div>
        <div className="task-foot"></div>
      </div>
  )
}

export default Tasks