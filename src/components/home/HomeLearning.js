import React from "react";
import { HomeLearningmainDiv } from "../../styledComponents/HomeStyle";
import HomeLearningCard from "./HomeLearningCard";
import htmlImg from '../../images/learning/html.svg'
import cssImg from '../../images/learning/css.svg'
import jsImg from '../../images/learning/javascript.svg'
import javaImg from '../../images/learning/java.svg'
import cppImg from '../../images/learning/c++.svg'
 

const HomeLearning = () => {

  //  ###changee :  use courses with context 
  const courses = [
    {
      name:"HTML",
      color:"#1de93156",
      img:htmlImg,
      progress:0
    },
    {
      name:"CSS",
      color:"#f453e96e",
      img:cssImg,
      progress:20
    },
    {
      name:"JAVASCRIPT",
      color: "#a44af26c",
      img:jsImg,
      progress:10
    },
    {
      name:"JAVA",
      color:"#593cfe4e",
      img:javaImg,
      progress:80

    },
    {
      name:"C++",
      color:"#a44af261",
      img:cppImg,
      progress:30
    },
  ];

  return (
    <HomeLearningmainDiv>
      <div style={{color:"black"}}>Your Courses</div>
      <div className="learningCard-container">

        {courses.map((val,ind)=><HomeLearningCard key={ind} color={val.color} name={val.name} img={val.img} progress={val.progress}/> )}
      </div>
    </HomeLearningmainDiv>
  );
};

export default HomeLearning;
