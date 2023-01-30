import React from "react";
import { HomeLearningCardDiv } from "../../styledComponents/HomeStyle";

import {buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";

const HomeLearningCard = ({color,name,img,progress}) => {
  return (
    <HomeLearningCardDiv style={{background:color}}>
      <div className="learning-card-div-heading">
        <span>{name} <br /> Learning</span>
        <img className="course-logo" src={img} alt={name} />
      </div>

      <div className="progress-img-container">
        <div className="circular-progress">
          <CircularProgressbar
            background="transparent"
            value={progress}
            text={`${progress}%`}
            backgroundPadding={5}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              trailColor: 'transparent',
              pathColor: `#000000db`,
              backgroundColor:"#8c8c8c52",
              textColor:"black"
            })}
          />
        </div>
        <div className="tasks-r">{progress/10}/10 <br /> Tasks</div>
      </div>

      <NavLink to={`../learning`}>
        <div className="learning-card-footer">
          <EastIcon />
        </div>
      </NavLink>

    </HomeLearningCardDiv>
  );
};

export default HomeLearningCard;
