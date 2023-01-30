import React, { useContext } from "react";

import Button from "@mui/material/Button";
import taskContext from "../context/taskContext";
import { NavLink } from "react-router-dom";

const CourseCard = ({ name, progress, icon, color, desc, status }) => {
  const { setLanguage } = useContext(taskContext);
  return (
    <div className="course-card" style={{ background: color, color: "white" }}>
      <div className="course-side-container">
        <h6>COURSE</h6>
        <h2>{name}</h2>
        {/* progress bar */}
        {/* <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
        {/* {progress > 0 ? (
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        ) : (
          <div style={{ height: "30px" }}></div>
        )} */}
        <div className="course-img-container">
          <div style={{ fontSize: "15px" }}>{desc}</div>
          <img
            src={icon}
            alt={name}
            style={{ filter: !status && "drop-shadow(0px 0px 0px )" }}
          />
        </div>

        {status && (
          <div className="course-nav-btn">
            <NavLink to={`intro=${name}`} onClick={() => setLanguage(name)}>
              <Button variant="contained">
                {progress > 0 ? "Continue" : "Start Now"}
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
