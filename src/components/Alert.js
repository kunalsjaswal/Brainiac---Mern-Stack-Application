import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import taskContext from '../context/taskContext'
import { AlertDiv } from '../styledComponents/alertStyle'

const Alert = () => {
  const {alert}=useContext(taskContext)
 

  return (
    <AlertDiv style={{background:"white",color:alert[2],border:"5px solid", borderColor:alert[2]}}>
      {alert[0]}
    </AlertDiv>
  )
}

export default Alert