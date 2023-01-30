import React, { useContext, useEffect } from 'react'
import taskContext from '../context/taskContext'
import { ScheduleNoteDiv } from '../styledComponents/ScheduleStyle'


// pie progress bar 
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// images 
import todayImg from '../images/schedule2.png'
import tomorrowImg from '../images/schedule1.png'


const ScheduleNote = () => {

  const {getTasks,tasks}=useContext(taskContext);

  

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      getTasks()
      // eslint-disable-next-
    }
  },[])

  const completedTasks=   tasks.filter((val)=> val.status === true).length;
  const remainingTasks=   tasks.filter((val)=> val.status === false).length;
  
  
  let percentage=(completedTasks/(remainingTasks+completedTasks))*100;


  // getting day of week 
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  let day2 = weekday[d.getDay()+1];
  if(day==="Saturday"){
    day2="Sunday";
  }
  const filterDataTotal= tasks.filter((val)=> val.weekDay === day).length;
  const filterDataRemaining= tasks.filter((val)=> val.weekDay === day && val.status===false).length;
  const filterDataTotal2= tasks.filter((val)=> val.weekDay === day2).length;
  const filterDataRemaining2= tasks.filter((val)=> val.weekDay === day2 && val.status===false).length;

  

  return (
    <ScheduleNoteDiv>
       
       <div className='pie-chart'>
        <h6 className='text-center'>Total Tasks this week</h6>
        <div className='grid-inside-pie'>
        <CircularProgressbar
          value={percentage}
          strokeWidth={45}
          backgroundPadding={0}
          background
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            strokeLinecap: 'butt',
            trailColor: '#d8d4d4',
            pathColor: `#8e5ffc`,
          })}
        />

        <div className="progress-info mt-4 text-center">
          <div className='my-2'>Completed -<span className="comp px-2 py-0 mx-3 rounded" style={{backgroundColor:"#8e5ffc"}}></span></div>
          <div>Remaining - <span className="comp px-2 py-0 mx-3 rounded" style={{backgroundColor:"#b6b2b2"}}> </span></div>
        </div>
        </div>

      </div>

      <div className="upcoming-tasks">
          <h5 className='m-3 text-center'>Upcoming Tasks</h5>

          <div className="today-tasks">
              {/* today's total tasks  */}
              <div className="taskNo">
                <div>
                  <h6>Today [{day}]</h6>
                  {filterDataRemaining}/{filterDataTotal} tasks
                </div>
                <div>
                  <img src={todayImg} style={{width:"40%",marginLeft:"45%"}} alt="img" />
                </div>
              </div>

              {/* tomorrow's total tasks  */}
              <div className="taskNo mt-2 bg-danger">
                <div>
                  <h6>Tomorrow</h6>
                  {filterDataRemaining2}/{filterDataTotal2} tasks
                </div>
                <div>
                 <img src={tomorrowImg} alt="img" />
                </div>
                
              </div>

              {/* tasks details  */}
              <div className="taskDetails">
                {tasks.length>0 && tasks.map((val)=>{
                  if(val.weekDay===day && val.status===false){
                    return <li style={{color:"#8e5ffc"}} key={val._id}>{val.task}</li>
                  }})}
                {tasks.length>0 && tasks.map((val)=>{
                  if(val.weekDay===day2 && val.status===false){
                    return <li className='text-danger' key={val._id}>{val.task}</li>
                  }})}
              </div>
          </div>
      </div>
    </ScheduleNoteDiv>
  )
}

export default ScheduleNote