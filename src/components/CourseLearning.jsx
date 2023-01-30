import React from 'react'

import {
   CourseLearningMainBody,
   CourseLearningMainDiv,
} from '../styledComponents/CourseLearningStyle'
import { Divider } from '@mui/material'

import { Pagination, Stack, Typography } from '@mui/material'

// importing json
import htmlData from '../json/html.json'
import cssData from '../json/css.json'
import cppData from '../json/cpp.json'
import javaData from '../json/java.json'
import jsData from '../json/js.json'

// import { useContext } from 'react'
// import taskContext from '../context/taskContext'
import CourseLearningNavbar from './CourseLearningNavbar'
import { useEffect } from 'react'
import { useState } from 'react'

const CourseLearning = ({ language }) => {
   // const { page, setPage } = useContext(taskContext)
   const [page, setPage] = useState(1)

   let languageData = htmlData
   if (language === 'CSS') {
      languageData = cssData
   } else if (language === 'C++') {
      languageData = cppData
   } else if (language === 'JAVA') {
      languageData = javaData
   } else if (language === 'JAVASCRIPT') {
      languageData = jsData
   }

   const [useFilteredArray, setuseFilteredArray] = useState([])
   const handlePageChange = (event, value) => {
      setPage(value)
   }
   var flourValue = Math.floor((languageData.length - 1) / 4)
   var paginationPage = flourValue + (languageData.length - 4 * flourValue)

   useEffect(() => {
      var filteredArray = languageData.filter((value, index) => {
         // console.log('page', page)
         return index <= 4 * page - 1 && index > 4 * (page - 1) - 1
      })
      // console.log('filtered array', filteredArray)
      setuseFilteredArray(filteredArray)
      console.log('state', useFilteredArray)
   }, [languageData, page, setPage, useFilteredArray])

   return (
      <CourseLearningMainDiv>
         <CourseLearningNavbar />
         <div className="course-heading">
            <h1>Start Learning {language}</h1>
         </div>
         {/* body part */}
         <CourseLearningMainBody>
            {
               <div>
                  {useFilteredArray.map((data) => {
                     return (
                        <div className="learning-content-container">
                           <div>
                              <h4>{data.heading}</h4>
                              <p>
                                 {data.content.map((cont) => {
                                    console.log('cont', cont)
                                    return (
                                       <>
                                          <p>{cont.value}</p>
                                          {cont.image ? (
                                             <div
                                                style={{
                                                   textAlign: 'center',
                                                }}
                                             >
                                                <img
                                                   src={`/${cont.image}`}
                                                   alt="img"
                                                />
                                             </div>
                                          ) : (
                                             <span></span>
                                          )}
                                       </>
                                    )
                                 })}
                              </p>
                              <div className="divider">
                                 <Divider />
                              </div>
                           </div>
                        </div>
                     )
                  })}
                  {
                     <div className="pagination">
                        <Stack spacing={2}>
                           <Typography>
                              <div className="page-no">Page No: {page}</div>
                           </Typography>

                           <Pagination
                              color="primary"
                              count={paginationPage}
                              page={page}
                              onChange={handlePageChange}
                           />
                        </Stack>
                     </div>
                  }
               </div>
            }
         </CourseLearningMainBody>
      </CourseLearningMainDiv>
   )
}

export default CourseLearning
