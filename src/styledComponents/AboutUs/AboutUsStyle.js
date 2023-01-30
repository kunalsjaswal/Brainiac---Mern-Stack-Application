import styled from "styled-components";

export const AboutUsMainDiv = styled.div`
  margin: 30px;
  padding: 20px;
  display: flex;
  gap: 30px;
  /* height: auto; */
  /* background-color: pink; */
  .aboutus-left {
    height: 100%;

    h1 {
      font-family: "Quicksand", sans-serif;
      margin-top: 30px;
      /* margin-bottom: 30px; */
      font-size: 5vw;
    }
    h4 {
      font-family: "Quicksand", sans-serif;
      padding-bottom: 30px;
    }
    p {
      font-family: "Quicksand", sans-serif;
      color: #4f4f4f;
    }
    .about-left-lower {
      margin-top: 40px;
      display: flex;
      gap: 20px;
      h2 {
        font-family: "Quicksand", sans-serif;
      }
    }
  }
  .aboutus-right {
    height: 100%;
    /* background-color: aqua; */
    .group-img {
      width: 550px;
    }
  }
`;
