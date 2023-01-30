import React, { useContext, useState } from 'react'
import { SignUpDiv } from '../styledComponents/Signup/SignUpStyle'
import slide1 from '../images/slides/slide-4.png'
import slide2 from '../images/slides/test2.jpg'
import slide3 from '../images/slides/test3.jpg'
import SignupCard from '../components/signup/SignupCard'
import LoginCard from '../components/signup/LoginCard'
import taskContext from '../context/taskContext'
import Alert from '../components/Alert'

const SignUp = () => {
   const [changeMode, setChangeMode] = useState(true)
   const {alert}=useContext(taskContext)

   const [avatarIcon, setAvatarIcon] = useState({
      status: false,
      icon: '',
   })

   return (
      <SignUpDiv>
         {alert[1]==="true" && <Alert/>}
         <div className="left-part">
            <div
               id="carouselExampleInterval"
               className="carousel slide"
               data-bs-ride="carousel"
            >
               <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="4000">
                     <img src={slide1} className="d-block " alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                     <img src={slide2} className="d-block " alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                     <img src={slide3} className="d-block " alt="..." />
                  </div>
               </div>
               <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
               >
                  <span
                     className="carousel-control-next-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>

         <div className="right-part">
            {/* form head  */}
            <div className="form-head">
               {avatarIcon['status'] ? (
                  <img
                     src={avatarIcon['icon']}
                     style={{ borderRadius: '15px', background: 'white',border:"3px solid white" }}
                     alt="avatar"
                  />
               ) : (
                  <i className="fa-sharp fa-solid fa-user fs-1"></i>
               )}

               <h1>
                  {changeMode ? 'Welcome! Register yourself' : 'Hello Again!'}
               </h1>
               <p>
                  Get yourself connected with the community. <br />
                  and have the full access of the site
               </p>
            </div>

            {/* form body  */}
            <div className="form-body">
               {changeMode ? (
                  <SignupCard setAvatarIcon={setAvatarIcon} icon={avatarIcon} />
               ) : (
                  <LoginCard />
               )}
            </div>

            {/* form footer */}

            <div className="form-footer">
               <div>
                  {changeMode
                     ? 'Already have an Account?'
                     : "Don't have an Account yet?"}{' '}
                  <b
                     className="text-primary"
                     onClick={() => setChangeMode(!changeMode)}
                  >
                     {changeMode ? 'Log in' : 'Sign up'}
                  </b>{' '}
               </div>
            </div>
         </div>
      </SignUpDiv>
   )
}

export default SignUp
