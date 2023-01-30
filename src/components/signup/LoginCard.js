import React, { useState } from 'react'
import { LoginCardDiv } from '../../styledComponents/Signup/SignUpStyle'
import { signInwithGoogle } from '../../firebase-config';
import googleLogo from '../../images/google.png'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import taskContext from '../../context/taskContext';

const Login = () => {

  const [loginData, setloginData] = useState({email:"",password:""})
  const navigate=useNavigate()
  const {setAlert,resetAlert}=useContext(taskContext)

  const onLoginHandler=async (e)=>{
    e.preventDefault();

    // write backend code for login
      const responce = await fetch("http://localhost:5000/brainiac/userLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({email:loginData.email,password:loginData.password})
        });

        const json=await responce.json();
        if (json.status) {
          //   save the auth token and redirect
          localStorage.setItem('username',json.username)
          localStorage.setItem('token',json.auth_token)

          //alert setting
          setAlert(["Logged in succesfully!","true","#01560c"])
          resetAlert()

          navigate("/dashboard");

        }
        else{
          setAlert(["Invalid Credentials!","true","#bf0202"])
          resetAlert()

        }

        setloginData({email:"",password:""})
  }

  const onChange=(e)=>{
    setloginData({...loginData,[e.target.name]:e.target.value})
  }

  const cond_login=loginData['email'].substring((loginData['email'].length)-4,loginData['email'].length)!==".com";
  const onBtnSubmit=()=>{

    if(cond_login){
      return;
    }
   setTimeout(() => {
      setloginData({email:"",password:""})
    }, 500)
  }

  return (
    <LoginCardDiv data-aos="flip-right">

      <form onSubmit={onLoginHandler}>
        <div className="mb-3">
          <TextField fullWidth style={{background:"#e1e3e2ac"}}  color='success' type="email" name='email' value={loginData.email} onChange={onChange} placeholder="abc@gmail.com" id="outlined-basic" label="Email" variant="outlined"  required/>
          <span className='tick-cross' style={{color:cond_login?"red":"green"}}><i className={`fa-solid fa-${cond_login?"xmark":"check"} pt-3 px-1`} style={{display:loginData['email'].length>0?"inline":"none"}}></i></span>
        </div>
        <div className="mb-3">
          <TextField fullWidth style={{background:"#e2e7e4a8"}} color="success" name='password' value={loginData.password} onChange={onChange} id="outlined-password-input"  type="password" label="Password" variant="outlined" min={5} required/>     
          <span className='tick-cross' style={{color:"green"}}><i className="fa-solid fa-check pt-3 px-1" style={{display:loginData['password'].length>=5 ?"inline":"none"}}></i></span>     

        </div>
        {/* disabled={} */}
        <button type="submit" onClick={onBtnSubmit} disabled={cond_login || loginData['password'].length<5} className="btn btn-success w-100">Login</button>
      </form>
      <div className='fs-6 text-center mt-3'>or</div>

      <button className='google'  onClick={signInwithGoogle}>
        <img src={googleLogo} alt="google" />
        Log in with Google
      </button>


    </LoginCardDiv>
  )
}

export default Login