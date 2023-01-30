// Libraries 
import React, { memo } from 'react'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import taskContext from '../context/taskContext'
import { LayoutDiv } from '../styledComponents/LayoutStyle'


// pages 
import Navbar from './Navbar'


// Layout function 
const Layout = () => {

  const {bg_color,bg_color2}=useContext(taskContext);
 
  // function dealing navbar in tablet mode 

const onClickHandler=()=>{
  document.getElementById("click-text").style.display="none";
  document.getElementById('left-part').style.display="block";
}

// variable for media queries 
var x=window.matchMedia("(max-width:900px)");

  return (
    <LayoutDiv bg_color={bg_color}>

        <div className="click" id='click-text' onClick={onClickHandler}>
         <i className="fa-solid fa-bars bars" ></i>
        </div>

        <div className="left-aside" id='left-part' style={{background:x.matches && `linear-gradient(${bg_color[0]},${bg_color[1]})`}}>
            <Navbar/>
        </div>

        <div className="right-aside" id='right-part' style={{backgroundColor:bg_color2}}>
            <Outlet/>
        </div>
    </LayoutDiv>
  )
}

export default memo(Layout)