import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import taskContext from '../../context/taskContext'
import { FitnessProgramCard } from '../../styledComponents/fitness/FitnessProgramCard'

const ProgramCard = ({name,desc,icon,linkName}) => {
  const {setFitnessCourse,fitnessCourse}=useContext(taskContext)

  return (
    <FitnessProgramCard>
      <i className={`fa-solid ${icon}`}></i>
      <h2>{name}</h2>
      <p>{desc}</p>

      <NavLink to={`program=${name}`} >
        <button onClick={()=>setFitnessCourse(name)}>Join now</button>
      </NavLink>
    </FitnessProgramCard>
  )
}

export default ProgramCard