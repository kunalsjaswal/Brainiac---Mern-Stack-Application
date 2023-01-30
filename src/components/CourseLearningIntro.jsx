import { Box, Button, Chip, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LearningIntroMainDiv } from '../styledComponents/CourseLearningStyle'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

function LinearProgressWithLabel(props) {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
         {/* <Box sx={{ display: 'flex' }}>
                <Typography variant="body1">
                    Learning Progress <HelpOutlineIcon />
                </Typography>
            </Box> */}
         <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
         </Box>
         <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
               props.value
            )}%`}</Typography>
         </Box>
      </Box>
   )
}
const courseIntroData = [
   {
      courseName: 'HTML',
      image: '/img/learning/staticPage/html.jpg',
      desc: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.',
      // desc: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ',
      whatWillYouLearn:
         'Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career.',
      preContent: ['Basic Computer', 'Internet Surfing'],
   },
   {
      courseName: 'CSS',
      image: '/img/learning/staticPage/css.jpg',
      desc: 'Cascading Style Sheets is a style sheet  used for describing the presentation of a document written in a markup language such as HTML or XML.',
      whatWillYouLearn:
         'Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career.',
      preContent: ['Basic Computer', 'Internet Surfing'],
   },
   {
      courseName: 'JAVASCRIPT',
      image: '/img/learning/staticPage/js.jpg',
      desc: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS',
      whatWillYouLearn:
         'Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career.',
      preContent: ['Basic Computer', 'Internet Surfing'],
   },
   {
      courseName: 'JAVA',
      image: '/img/learning/staticPage/java.png',
      desc: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      whatWillYouLearn:
         'Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career.',
      preContent: ['Basic Computer', 'Internet Surfing'],
   },
   {
      courseName: 'C++',
      image: '/img/learning/staticPage/cpp.jpg',
      desc: "C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'",
      whatWillYouLearn:
         'Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career.',
      preContent: ['Basic Computer', 'Internet Surfing'],
   },
]
const CourseLearningIntro = ({ language }) => {
   return (
      <LearningIntroMainDiv>
         {courseIntroData.map((data) => {
            return (
               <>
                  {language === data.courseName ? (
                     <>
                        <div className="intro-upper-part">
                           <div className="intro-img-container">
                              <img src={data.image} alt="intro-logo" />
                              <div className="intro-start-btn">
                                 <NavLink to={`/learning/course=${language}`}>
                                    <Button variant="contained" fullWidth={100}>
                                       {/* {progress > 0 ? 'Continue' : 'Start Now'} */}
                                       Start
                                    </Button>
                                 </NavLink>
                              </div>
                           </div>
                           <div className="intro-data">
                              <h2 className="myfont">
                                 {language} Learning Program
                              </h2>
                              <p className="myfont">{data.desc}</p>
                           </div>
                        </div>
                        <div className="intro-middle-part ">
                           <div>
                              <div className="myfont">
                                 <b>Learning Progress</b> <HelpOutlineIcon />
                              </div>
                              <div>
                                 <Box
                                    className="intro-progress-container"
                                    sx={{ width: '90%' }}
                                 >
                                    <LinearProgressWithLabel
                                       style={{
                                          height: '10px',
                                          borderRadius: '10px',
                                          display: 'block',
                                       }}
                                       value={50}
                                    />
                                 </Box>
                              </div>
                           </div>
                           <div className="myfont">
                              <b>Status: </b>Not Yet Completed
                           </div>
                           <div className="recalculate-btn-container">
                              <Button variant="outlined" className="myfont">
                                 Recalculate Process
                              </Button>
                           </div>
                        </div>
                        <div className="intro-bottom-part">
                           <h5>Overview</h5>
                           <div>
                              <h6>What you will learn</h6>
                              <p className="myfont">{data.whatWillYouLearn}</p>
                           </div>
                           <div>
                              <h6>Pre Contents</h6>
                              <ul>
                                 {data.preContent.map((value) => (
                                    <li className="myfont">{value}</li>
                                 ))}
                              </ul>
                           </div>
                           <div>
                              <h6>Skill you will Gain</h6>
                              <div className="chips-container">
                                 <Chip label="TypeScript" />
                                 <Chip label="Bootstrap" />
                              </div>
                           </div>
                        </div>
                     </>
                  ) : (
                     <p></p>
                  )}
               </>
            )
         })}
      </LearningIntroMainDiv>
   )
}

export default CourseLearningIntro
