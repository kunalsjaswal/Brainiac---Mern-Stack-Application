import React, { memo } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import taskContext from '../context/taskContext'
import { NavbarDiv } from '../styledComponents/NavbarStyle'
import logo from '../images/logo4.png'
import facebook from '../images/navbar/facebook.gif'
import instagram from '../images/navbar/instagram.gif'
import linkdin from '../images/navbar/linkedin.gif'

// Navbar function
const Navbar = () => {
   const {
      bg_color,
      setBg_color,
      setBg_color2,
      navbarBlink,
      setNavbarBlink,
      setAlert,
      resetAlert
   } = useContext(taskContext)

   const onClickHandler = () => {
      document.getElementById('click-text').style.display = 'block'
      document.getElementById('left-part').style.display = 'none'
   }

   const [cond, setcond] = useState(true)
   const themeHandler = () => {
      if (cond) {
         setBg_color('black')
         setBg_color2('black')
         document.getElementById('theme-span').innerHTML = 'Light'
         setcond(!cond)
      } else {
         setBg_color2('#d3d2d3')
         document.getElementById('theme-span').innerHTML = 'Dark'
         setcond(!cond)
      }
   }

   // logout

   const navigate = useNavigate()

   const handleLogout = () => {
      setNavbarBlink(false)
      var askLogout = window.confirm('Are you sure?')
      if (askLogout) {
         localStorage.removeItem('token')
         setAlert(['Logged out succesfully!', 'true', '#ff0000da'])
         resetAlert()

      }
   }

   // returning JSX
   return (
      <NavbarDiv>
         <div className="heading">
            {/* <canvas id="canvas2"></canvas> */}

            <div>
               <NavLink to="/" onClick={() => setNavbarBlink(true)}>
                  <h2>
                     <img
                        src={logo}
                        className="mx-2"
                        style={{
                           filter: navbarBlink
                              ? 'drop-shadow(2px 2px  8px white)'
                              : '',
                           transition: '0.4s',
                        }}
                        alt="logo"
                     />
                     Brainiac
                  </h2>
               </NavLink>
            </div>
            <div>
               <i
                  onClick={onClickHandler}
                  className="fa-solid fa-xmark cross"
                  style={{
                     position: 'absolute',
                     fontSize: '1.8em',
                     marginLeft: '78%',
                     marginTop: '-50px',
                     borderRadius: '5px',
                     border: '2px solid white',
                     // height: "4.8%",
                     padding: '2% 4%',
                  }}
               />
            </div>
         </div>
         {/* <i class="fa-light fa-brain-circuit"></i> */}

         <div className="links">
            <NavLink
               to="learning"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i className="fa-solid fa-graduation-cap mx-2"></i>
               Learning
            </NavLink>

            <NavLink
               to="fitness"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i className="fa-sharp fa-solid fa-dumbbell mx-2"></i>
               Fitness
            </NavLink>

            <NavLink
               to="network"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i className="fa-solid fa-circle-nodes mx-2"></i>
               Network
            </NavLink>

            <NavLink
               to="schedule"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i className="fa-solid fa-calendar-days mx-2"></i>
               Schedule
            </NavLink>
            <hr
               style={{
                  color: 'white',
                  width: '90%',
                  height: '0.5%',
                  borderRadius: '5px',
                  marginLeft: '5%',
               }}
            />

            <NavLink
               to="theme"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i className="fa-solid fa-circle-half-stroke mx-2"></i>
               Theme
            </NavLink>

            {localStorage.getItem('token') ? (
               <NavLink
                  to="dashboard"
                  onClick={() => {
                     setNavbarBlink(false)
                  }}
               >
                  <i className="mx-2 fa-solid fa-table-columns"></i>
                  Dashboard
               </NavLink>
            ) : (
               ''
            )}

            {!localStorage.getItem('token') && (
               <NavLink
                  to="signup"
                  onClick={() => {
                     setNavbarBlink(false)
                  }}
               >
                  <i class="mx-2 fa-solid fa-user-plus"></i>
                  Sign up
               </NavLink>
            )}

            <NavLink
               to="about"
               onClick={() => {
                  setNavbarBlink(false)
               }}
            >
               <i class="mx-2 fa-solid fa-circle-info"></i>
               About Us
            </NavLink>
            {localStorage.getItem('token') && (
               <NavLink
                  to="/"
                  onClick={handleLogout}
                  style={{
                     background: 'rgb(224, 66, 66)',
                     fontWeight: 'normal',
                     color: 'white',
                     boxShadow: '0 0 0 transparent',
                  }}
               >
                  <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i>
                  Logout
               </NavLink>
            )}
         </div>

         <div className="foot">
            <h5>Follow us on</h5>
            <div className="followUs-container">
               <div>
                  <img src={facebook} alt="fb" />
               </div>
               <div>
                  <img src={instagram} alt="insta" />
               </div>
               <div>
                  <img src={linkdin} alt="ln" />
               </div>
            </div>
         </div>
      </NavbarDiv>
   )
}

export default memo(Navbar)
