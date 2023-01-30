import React,{ useContext, useEffect } from 'react'
import taskContext from '../../context/taskContext';
import { HomeScheduleDiv } from '../../styledComponents/HomeStyle';

const HomeSchedule = () => {

  const {tasks,getTasks}=useContext(taskContext);

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      getTasks()
      // eslint-disable-next-
    }
  },[]);
  
  
  const completedTasks=tasks.filter((val)=> val.status === true);
  const remainingTasks=tasks.filter((val)=> val.status === false);

  return (
    <HomeScheduleDiv>
      <h6 className='mx-2'>Upcoming tasks</h6>
      <div className="inside-div-1">
        <div className="task-completed px-2">
          <span>{completedTasks.length}</span>
          <p >task <br /> completed</p>
          
        </div>
        
        <div className="task-remaining px-2">
          <span >{remainingTasks.length}</span> 
          <p>task <br /> remaining</p>
          
        </div>

        <div className="tasks-desc ">
          {remainingTasks.length ===0 && "You have completed this week tasks till now"}
          {remainingTasks.length>0 && 
          <article className='rounded' style={{color:"rgb(255, 255, 255)",background:"rgba(111, 114, 106, 0.815)"}}><span className='mx-2 '>Due</span> <li style={{listStyleType:"none"}}>Tasks remaining</li> </article>
          }
          <hr style={{marginTop:"1%",marginBottom:"0%"}}/>
          {remainingTasks.length>0 && 
          remainingTasks.map((val)=>
          <article key={val._id}><span className='mx-2' > <b>{val.weekDay.substring(0,3)}</b></span><li style={{listStyleType:"none"}}>: {val.task}</li></article>

          )}
        </div>
      </div>
      
    </HomeScheduleDiv>
  )
}

export default HomeSchedule