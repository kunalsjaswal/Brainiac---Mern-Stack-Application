import React from 'react'
import { NavLink } from 'react-router-dom'
import { CourseLearningNavbarMainDiv } from '../styledComponents/CourseLearningStyle'

const CourseLearningNavbar = () => {
   return (
      <CourseLearningNavbarMainDiv>
         <div>
            <ul>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>HOME</li>
               </NavLink>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>HTML</li>
               </NavLink>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>CSS</li>
               </NavLink>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>JAVASCRIPT</li>
               </NavLink>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>JAVA</li>
               </NavLink>
               <NavLink to="/learning" style={{ textDecoration: 'none' }}>
                  <li>C++</li>
               </NavLink>
            </ul>
         </div>
      </CourseLearningNavbarMainDiv>
   )
}

export default CourseLearningNavbar
