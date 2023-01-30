import React from 'react'
import { AccessDeniedDiv } from '../styledComponents/AcessdeniedStyle'
import img1 from '../images/denied.png'
import { NavLink } from 'react-router-dom'

const AccessDenied = () => {
  return (
    <AccessDeniedDiv>
       <i className="fa-solid fa-lock"></i>
      <div>Please Login to access this page</div>

      <NavLink to='/signup'>Login</NavLink><br />
      <img src={img1} alt="" />
    </AccessDeniedDiv>
  )
}

export default AccessDenied