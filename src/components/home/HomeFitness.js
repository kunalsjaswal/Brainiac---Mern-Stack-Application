import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeFitnessDiv } from '../../styledComponents/fitness/HomeFitnessSection'

const HomeFitness = () => {
  return (
    <HomeFitnessDiv>
      <h6 >Fitness courses</h6>
      <div className="main-hf">

        <div className="prog-hf">
          <span>Our Program</span><i className="fs-6 mx-2 text-light fa-solid fa-arrow-right"></i><br />
          <NavLink to="/fitness">
            <button>Get now</button>
          </NavLink>
        </div>

        <div className="subPrograms">
          <section>
            <div>Physical Fitness</div>
            <hr  style={{margin:"0"}}/>
            <div>Strength</div>
            <hr  style={{margin:"0"}}/>
            <div>Fat Lose</div>
          </section>
          <section>
            <div>Weight gain</div>
            <hr  style={{margin:"0",marginTop:"10%"}}/>
            <div>Abs</div>
            <hr  style={{margin:"0%",marginTop:"10%"}}/>
            <div>Others</div>
          </section>
        </div>
      </div>
    </HomeFitnessDiv>
  )
}

export default HomeFitness