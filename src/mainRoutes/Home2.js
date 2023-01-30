import React, { useContext, useEffect, useState } from 'react'
import { LandingPageDiv } from '../styledComponents/LandingPageStyle'
import logo from '../images/logo4.png'
import vdio from '../images/animation2.mp4'
import {  NavLink } from 'react-router-dom';
import taskContext from '../context/taskContext';
import Alert from '../components/Alert';

const Home = () => {

  const {setNavbarBlink,alert,setAlert,resetAlert}=useContext(taskContext);
  const handleLogout=()=>{
    setNavbarBlink(false)
    if(window.confirm("want to log out?")){
      setAlert(["Logged out succesfully","true","#ff0000da"])
      resetAlert()
      localStorage.removeItem('token')
    }

  }
 

  return (
    <LandingPageDiv>
      {/* into  */}

      {alert[1]==='true' && <Alert/>}

      <section className="intro-sec">
        <h1>
          BRAINIAC
          <h3>
            Train Your Brain, Pump your Muscles, <br />
            Be a part of Community <br /> and Manage your Routine
          </h3>
          <p className="mt-5">
          Brainiac is a user-friendly and interactive web application intended to ease the hectic lives of adults.
          Brainiac’s main idea is to ease the life of adults by providing solutions to various problems at a single place. The key features of Brainiac include a learning platform, social network, fitness routine and schedule manager. Today only, you can start using the features of BRAINIAC and initiate your first step by
          </p>
            
            {localStorage.getItem('token')?
            <NavLink  style={{color:"white",textDecoration:"none"}}>
              <button className="btn fs-2" onClick={handleLogout}>
              Logout<i className="fa-solid fa-right-to-bracket mx-2"></i>
              </button>
           </NavLink>:
            <NavLink to="signup" style={{color:"white",textDecoration:"none"}}>
              <button className="btn fs-2" onClick={()=>setNavbarBlink(false)}>
              SignUp<i className="fa-solid fa-right-to-bracket mx-2"></i>
              </button>
            </NavLink>
            }
        </h1>
        <img src={logo} alt="logo" className="mt-5" />
      </section>

      {/* learning  */}
      <section className="all-sec">
        <h1 className='mx-5'>Let's Get Started</h1>

        <div className="grid-all">
          {/* <img src={logo} alt="vdio" /> */}

          <video autoPlay muted loop >
            <source src={vdio} type="video/mp4"/>
          </video>
          <div className="learn-sec">
            <h1>1</h1>
            <h2>Learning</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iusto alias repellendus voluptates nisi? Porro inventore quasi dolorum! Placeat, dicta!</p>
            </div>
          <div className="fitness-sec">
            <h1>2</h1>
            <h2>Fitness</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae magni quibusdam dicta? Laboriosam corrupti earum amet placeat dolores sapiente?</p>
          </div>
          <div className="social-sec">
            <h1>3</h1>
            <h2>Social</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos exercitationem dolor quos minus sint enim eius quod obcaecati non eveniet.</p>
          </div>
          <div className="todo-sec">
            <h1>4</h1>
            <h2>Schedule</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae repellendus quos quae? Fuga quam tenetur facere, fugit quo debitis incidunt qui tempore adipisci animi aliquid non assumenda, autem dolorum.</p>
          </div>
        </div>
      </section>

      {/* <section className="get-to-know">
        <h1>Get to Know Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, molestias. Asperiores libero placeat vero architecto dicta corporis? Quidem, itaque in? Hic mollitia amet quibusdam iusto ab cumque sint sunt eos!</p>
      </section> */}


    </LandingPageDiv>
  );
};

export default Home;
