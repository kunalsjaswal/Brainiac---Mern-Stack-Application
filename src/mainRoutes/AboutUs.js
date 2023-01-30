import React from "react";
import { AboutUsMainDiv } from "../styledComponents/AboutUs/AboutUsStyle";
import groupImage from '../images/aboutUs.png'

const AboutUs = () => {

  return (
    <AboutUsMainDiv>
      <div className="aboutus-left">
        <div>
          <h1>Our Team</h1>
          <h4>Meet The Entire Team</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="about-left-lower">
          <div>
            <h2>Culture</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <div>SCROLL</div>
          </div>
          <div>
            <h2>Workspace</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-right">
        <div>
          <img
            className="group-img"
            src={groupImage}
            alt="our team "
          />
        </div>
        <div> right lower part</div>
      </div>
      
    </AboutUsMainDiv>
  );
};

export default AboutUs;
