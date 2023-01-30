import React, { useContext } from 'react'
import { HomeDiv } from '../styledComponents/HomeStyle'
// importing pages 
import HomeSchedule from '../components/home/HomeSchedule'
import HomeFitness from '../components/home/HomeFitness'
import HomeLearning from '../components/home/HomeLearning'

import { useNavigate } from 'react-router-dom'
import taskContext from '../context/taskContext'
import { useEffect } from 'react'
import Alert from '../components/Alert'

const Dashboard = () => {
  const navigate=useNavigate()
  const {userD,getUserData,alert,setAlert}=useContext(taskContext)
useEffect(()=>{
  if(localStorage.getItem('token')){
    getUserData()

    }

},[])

  return (
    <HomeDiv>

      <div className="heading">
        {alert[1]==="true" && <Alert/>}
        
        <h3>Welcome Back, {userD['username']}!
          
          {/* <button onClick={handleLogout}>
            {localStorage.getItem('token')?"logout":"login"}
          </button> */}

        </h3>
        <img src={userD['imgUrl']} className="border border-3" alt="profile pic" />
        <div >Hope you make this week productive. Good luck <i className="fa-solid fa-thumbs-up fs-6"></i></div>
      </div>
      
      <hr style={{color:"white"}}/>
      <div className="grid mt-5">

        {/* home schedule section  */}
        <div className="top-left">
          <HomeSchedule/>
        </div>

        {/* fitness section  */}
        <div className="top-right" >
          <HomeFitness/>
        </div>

        {/* learning section  */}
        <div className="bottom">
          <HomeLearning/>
        </div>
      </div>
    </HomeDiv>
  )
}

export default Dashboard