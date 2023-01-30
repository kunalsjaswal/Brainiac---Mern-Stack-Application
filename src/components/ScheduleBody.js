import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/taskContext';
import { ScheduleBodyDiv } from '../styledComponents/ScheduleStyle'
import Tasks from './Tasks';

const ScheduleBody = ({dayOfWeek}) => {

  const {tasks}=useContext(taskContext);


  const condition=tasks.filter((val)=> val.weekDay===dayOfWeek).length;
  console.log(condition)

  return (
    <ScheduleBodyDiv>
        {condition===0 && <Tasks task="No task is assigned to this day" status="NaN" date="NaN" iconIndex={7} empty={true}/>}
        {condition>0  &&
        tasks.map((val)=>{
            if(val.weekDay===dayOfWeek){
                return <Tasks key={val._id} task={val.task} id={val._id} status={val.status} date={val.date} iconIndex={val.iconIndex} empty={false}/>
            }
        }
        )
        }
    </ScheduleBodyDiv>
  )
}

export default ScheduleBody