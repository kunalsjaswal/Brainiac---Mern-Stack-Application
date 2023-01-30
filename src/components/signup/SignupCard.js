import { TextField } from '@mui/material'
import { SignUpCardDiv } from '../../styledComponents/Signup/SignUpStyle'
import googleLogo from '../../images/google.png'
import { signInwithGoogle } from '../../firebase-config'
import { useContext, useState } from 'react'
import AddAvatar from './AddAvatar'
import taskContext from '../../context/taskContext'
import Alert from '../Alert'

const SignupCard = ({setAvatarIcon,avatarIcon}) => {

  const {alert,setAlert,resetAlert} =useContext(taskContext)

  const [signupData, setsignupdata] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:"",
    imgUrl:""
  })

  const onChange=(e)=>{
    setsignupdata({...signupData,[e.target.name]:e.target.value})
  }
  

  // onclick handler function calling api
  const handleSignup=async(e)=>{
    e.preventDefault()
    if(signupData.password === signupData.cpassword){
      const response=await fetch("http://localhost:5000/brainiac/newUser",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({username:signupData.username,email:signupData.email,password:signupData.password,imgUrl:signupData.imgUrl})
      })
      
      setAlert(["Signed in succesfully!","true","#01560c"])
      resetAlert()
      const json=await response.json()
      
    }else{
      setAlert(["Error! Please try again","true","#bf0202"])
      resetAlert()
      
    }
  }
  const cond_login=signupData['email'].substring((signupData['email'].length)-4,signupData['email'].length)!==".com";
  const cond_pass=signupData['password']===signupData['cpassword']


  const onSignUpClickBtn=()=>{
    setAlert(["Signed in succesfully!","true","#01560c"])
    setTimeout(() => {
      setsignupdata({username:"",email:"",password:"",cpassword:"",imgUrl:""})
      setAvatarIcon({status:false,icon:""})

    }, 500);
  }

  return (
    <SignUpCardDiv data-aos="flip-left">
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <TextField fullWidth size="small" style={{background:"#e1e3e2ac",marginBottom:"2%"}} value={signupData.username} color="success" id="outlined-basic" label="Username" name='username' variant="outlined" onChange={onChange}placeholder="(min 5 length)"  min={5} required/>
            <span className='tick-cross' style={{color:signupData['username'].length<5?"red":"green"}}><i className={`fa-solid fa-${signupData['username'].length<5?"xmark":"check"} pt-3 px-1`} style={{display:signupData['username'].length>0?"inline":"none"}} ></i></span>
          </div>
          <div className="mb-3">
            <TextField fullWidth size="small" style={{background:"#e1e3e2ac",marginBottom:"2%"}} color="success" id="outlined-basic" label="Email" name='email' variant="outlined" value={signupData.email} type="email" onChange={onChange} required/>
            <span className='tick-cross' style={{color:cond_login?"red":"green"}}><i className={`fa-solid fa-${cond_login?"xmark":"check"} pt-3 px-1`} style={{display:signupData['email'].length>0?"inline":"none"}}></i></span>
          </div>
            
          <div className="mb-3">
            <TextField  size="small" style={{background:"#e2e7e4a8",width:"47%"}} color="success" id="outlined-password-input" label="Password"  type="password" name='password' variant="outlined" value={signupData.password} onChange={onChange} min={5} placeholder="(length min 5)" required/>        
            <TextField  size="small" style={{background:"#e2e7e4a8",width:"47%",marginLeft:"6%"}} color="success" id="outlined-password-input"  type="password" label="Confirm password" name='cpassword' variant="outlined" value={signupData.cpassword} min={5} onChange={onChange} disabled={signupData['password'].length<5}/>
            <span className='tick-cross' style={{color:!cond_pass || signupData['password'].length<5?"red":"green"}}><i className={`fa-solid fa-${!cond_pass || signupData['password'].length<5 ?"xmark":"check"} pt-3 px-1`} style={{display:signupData['password'].length>0 && signupData['cpassword'].length>0?"inline":"none"}}></i></span>        
          </div>
          
      
        <div className="mb-1 d-grid" style={{gridTemplateColumns:"20% 75%",gridColumnGap:"5%"}}>
           <div className='bg-dark text-light rounded px-3 h-50 sel-avatar'>Avatar</div> <AddAvatar setAvatarIcon={setAvatarIcon} setsignupdata={setsignupdata} signupData={signupData}/>
        </div>

        <button type="submit" disabled={!cond_pass || cond_login || signupData['username'].length<5 || signupData['imgUrl'].length===0} className="btn btn-success w-100" onClick={onSignUpClickBtn}>Sign up</button>
         
        </form>
        <div className='fs-6 text-center mt-3'>or</div>

      <button className='google' onClick={signInwithGoogle}>
        <img src={googleLogo} alt="google" />
        Sign in with Google
      </button>
    </SignUpCardDiv>
  )
}

export default SignupCard