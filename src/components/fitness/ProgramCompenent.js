import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import taskContext from '../../context/taskContext'
import { ProgramDiv } from '../../styledComponents/fitness/programStyle'

const ProgramCompenent = () => {
  const {setFitnessCourse,fitnessCourse}=useContext(taskContext)

  return (
    <ProgramDiv>
        <div className="main-anim">
            <div className="head">
                <NavLink to="/fitness" className="text-dark">
                    <i className="fa-solid fa-angles-left"></i>
                </NavLink>
                <span>{fitnessCourse} Course</span>   
            </div>

        </div>
    </ProgramDiv>
  )
}

export default ProgramCompenent