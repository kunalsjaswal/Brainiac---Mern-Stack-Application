import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import taskContext from '../context/taskContext';
import { ScheduleModalDiv } from '../styledComponents/ScheduleStyle'

const SchduleModal = ({setModal,modal,day}) => {

  const {addTask,activity,inputField,setInputField,getTasks}= useContext(taskContext);
  const [inputTask, setInputTask] = useState("")
  const navigate=useNavigate()

    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        let iconIndex=inputField.findIndex(val=> val===true);
        
        addTask(inputTask,day,iconIndex===-1?7:iconIndex);
        setInputTask("")
        setModal(!modal)
        setInputField(inputField.map(ele=>ele=false)) 
         navigate('/schedule')

    }

    const onIconClickHandler=()=>{
      setModal(!modal)
      setInputField(inputField.map(ele=>ele=false)) 
    }


  return (
    <ScheduleModalDiv>
        <div className="main">
            <div className="header">
                <h4 className='text-center'>Select Activity</h4>
                <i className="fa-solid fa-xmark"  onClick={onIconClickHandler} />
                </div>
            <div className="body">
              <p className="icons">


                {
                  activity.map((val,index)=>(
                  <a key={index}>
                  <i  class={`fa-solid ${val.icon}`} id={`icon-${index}`} onClick={()=>setInputField(inputField.map((val,idx)=> index===idx?true:false))} style={{color:val.color,backgroundColor:inputField[index]?"#f4eef8":"#e9d5f57e"}}></i> <br />
                  {val.name}
                </a>))
                }


              </p>
            <hr />
              <form onSubmit={onSubmitHandler}>
                <h6 className='fs-6 text-center my-3'>Task Description</h6>
                  <input className='rounded border-0 w-100  p-2' onChange={(e)=>setInputTask(e.target.value)} value={inputTask} type="text" placeholder='Enter task here ... ' style={{margin:"auto"}}/>
                <hr />
                <div className="footer">
                  <button type='submit' className='btn btn-success py-1' style={{marginLeft:"38%",width:"25%" }}>Submit</button>
                </div>
              </form>

            </div>
        </div>
    </ScheduleModalDiv>
  )
}

export default SchduleModal