import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
// pages
import Layout from './mainRoutes/Layout'
import Home from './mainRoutes/Home2'
import Fitness from './mainRoutes/Fitness'
import Network from './mainRoutes/Network'
import PageNotFound from './mainRoutes/PageNotFound'
import Learning from './mainRoutes/Learning'
import Schedule from './mainRoutes/Schedule'
import ThemeChange from './mainRoutes/ThemeChange'
import AboutUs from './mainRoutes/AboutUs'
import SignUp from './mainRoutes/SignUp'

import Dashboard from './mainRoutes/Dashboard'
import { AppStyleDiv } from './styledComponents/AppStyle'
import ScheduleBody from './components/ScheduleBody'
import ScheduleNote from './components/ScheduleIndex'
import taskContext from './context/taskContext'
import CourseLearning from './components/CourseLearning'
import CourseLearningIntro from './components/CourseLearningIntro.jsx'

// animation imports ###
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProgramCompenent from './components/fitness/ProgramCompenent'
import AccessDenied from './mainRoutes/AccessDenied'
AOS.init()
//#######

// App function
function App() {
   const { ScheduleRoute, language, bg_color, fitnessCourse } =
      useContext(taskContext)
   // returning JSX
   return (
      <AppStyleDiv
         style={{
            background: `linear-gradient(${bg_color[0]},${bg_color[1]})`,
         }}
      >
         {/* route paths   */}
         <Routes>
            <Route exact path="/" element={<Layout />}>
               {/* inner routes  */}
               <Route index element={<Home />} />
               <Route exact path="learning" element={<Learning />} />
               {/* Learning sub routes */}
               <Route
                  exact
                  path={`learning/course=${language}`}
                  element={<CourseLearning language={language} />}
                />
               <Route
                  exact
                  path={`learning/intro=${language}`}
                  element={<CourseLearningIntro language={language} />}
               />
               <Route exact path="fitness" element={<Fitness />} />
               <Route
                  exact
                  path={`fitness/program=${fitnessCourse}`}
                  element={<ProgramCompenent />}
               />
               <Route
                  exact
                  path="network"
                  element={
                     localStorage.getItem('token') ? (
                        <Network />
                     ) : (
                        <AccessDenied />
                     )
                  }
               />

               <Route exact path="theme" element={<ThemeChange />} />
               <Route exact path="about" element={<AboutUs />} />
               <Route exact path="signup" element={<SignUp />} />
               <Route
                  exact
                  path="schedule"
                  element={
                     localStorage.getItem('token') ? (
                        <Schedule />
                     ) : (
                        <AccessDenied />
                     )
                  }
               >
                  <Route index element={<ScheduleNote />} />
                  <Route
                     path={`week=${ScheduleRoute}`}
                     element={<ScheduleBody dayOfWeek={ScheduleRoute} />}
                  />
               </Route>
               <Route exact path="dashboard" element={<Dashboard />}></Route>
               <Route path="*" element={<PageNotFound />} />
            </Route>
         </Routes>
      </AppStyleDiv>
   )
}

export default App
