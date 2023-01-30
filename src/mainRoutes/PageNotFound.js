import React from 'react'
import img1 from '../images/pageNotFound.gif'
import { PageNotFoundDiv } from '../styledComponents/AppStyle'


const PageNotFound = () => {
  return (
    <PageNotFoundDiv>
      <img src={img1} alt="404 error" />
    </PageNotFoundDiv>
  )
}

export default PageNotFound