import React, { useEffect } from "react";
import { FitnessMain } from "../styledComponents/fitness/FitnessStyle";
import mainImg from '../images/fitness/mainImage.png'
import ProgramCard from "../components/fitness/ProgramCard";
import abs from '../images/fitness/abs.png'
import pushup from '../images/fitness/pushup.png'
import yoga from '../images/fitness/yoga.png'
import running from '../images/fitness/running.png'
import stretch from '../images/fitness/stretch.png'
import lifting from '../images/fitness/lifting.png'
import featuredImg from '../images/fitness/featured_course.png'


const programs = 
  [
    {name:"Physical Fitness",
     desc:"Maintain body fitness by doing physical exercise at least 2-3 times in a week.",
     icon:"fa-heart-pulse"
    },
    {name:"Strength",
     desc:"Increase physical strength is the goal of strength training.",
     icon:"fa-dumbbell"  
    },
    {name:"Weight gain",
     desc:"Focus on increasing the number of reps or increasing the load.",
     icon:"fa-weight-scale" 
    },
    {name:"Fat Lose",
      desc:"Aims to reduce fat as much as possible from the body to about 2-4%.",
      icon:"fa-person"  
    },
    {name:"Abs",
      desc:"Exercising abdominal muscles and making it into a better shape or having abs on the stomach.",
      icon:"fa-person-walking"  
    },
  ]
  const linksToprograms=["PhysicalFitness","Strength","WeightGain","FatLose","Abs"]
const Fitness = () => {

      const commonExe=[abs,pushup,yoga,running,stretch,lifting]

      
  return (
  <FitnessMain>
   
      <section className="f-head">
        <img src={mainImg} alt="fitness" />
      </section>
      <section className="f-body">
        <h1>
          <h3>PROGRAM</h3>
          EXPLORE OUR <br /> PROGRAM
        </h1>
        <div className="f-body-courses">
          {
            programs.map((val,ind)=><ProgramCard key={ind} name={val.name} desc={val.desc} icon={val.icon} linkName={linksToprograms[ind]}/>)
          }
        </div>
      </section>

      <section className="f-body-2">
        <h1>Popular Exercises <h3>EXERCISES</h3> <span>try to include them in your daily routine</span> </h1>
          
        <div>
          {commonExe.map((val,ind)=> <img key={ind} src={val} alt="common workouts" />)}
        </div>
      </section>

      <section className="feature-program">
          <h1>Featured Program For a month <br /><span>enjoy with our one month course provided free to use.</span></h1>

          <div>
            <p>Having less time? try our featured program speacially designed to make your body at its maximum shape with normal efforts.</p>
            <button>Start now</button>
            <img src={featuredImg} alt="featured program" />

          </div>
          
      </section>
  </FitnessMain>
  );
};

export default Fitness;
