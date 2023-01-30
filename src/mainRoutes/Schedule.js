import React, { useContext, useEffect, useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import ScheduleBody from '../components/ScheduleBody';
import taskContext from '../context/taskContext';
import { ScheduleDiv } from '../styledComponents/ScheduleStyle'
import SchduleModal from '../components/ScheduleModal';

const weekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Note"];

const Schedule = () => {

  const {ScheduleRoute,setScheduleRoute}=useContext(taskContext);

  const [modal, setModal] = useState(false);

  return (
    <ScheduleDiv>
      <h3>Weekly Schedule</h3>

        <div className="sc-main-div">
          <div className="sc-head">

            {ScheduleRoute==="main"?"":
            <button type="button" className='add-btn' ><i className="fa-solid fa-plus " onClick={()=>setModal(!modal)}/></button>  
            }
            <NavLink className="note-class" to="" onClick={()=>setScheduleRoute("main")}>Week Day</NavLink>
            {
              weekDays.map((val,index)=><NavLink className="week-class"  onClick={()=>setScheduleRoute(val)} key={index} to={`week=${val}`}>{val}</NavLink>)
            }

          {modal && <SchduleModal setModal={setModal} modal={modal} day={ScheduleRoute}/>}
          </div>

          <div className="sc-body">
              <Outlet/>
          </div>
        </div>
        

    </ScheduleDiv>
  )
}

export default Schedule