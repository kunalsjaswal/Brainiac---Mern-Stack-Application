import styled from "styled-components";

export const HomeDiv = styled.div`
  div.heading {
    display: grid;
    grid-template-columns: 60% 40%;
    background-color: #a13bf596;
    color: white;
    /* border:2px solid white; */
    padding: 2% 0.5%;
    border-radius: 10px;
    border-top-left-radius: 30px;
    img {
      width: 13%;
      margin-left: 85%;
      border-radius: 10px;
    }
    div {
      font-size: 1vw;
      margin-top: -3%;
      margin-left: 0.5%;
      color: rgb(237, 232, 232);
    }
  }

  div.grid {
    display: grid;
    grid-template-columns: 60% 40%;

    div.top-left {
      /* border: 1px solid black; */
      padding: 2%;
    }
    div.top-right {
      /* border: 1px solid black; */
      padding: 2%;
    }

    div.bottom {
      grid-column: 1/3;
      padding: 2%;

      /* border: 1px solid black; */
    }
  }

  @media (max-width: 900px) {
    div.heading {
      padding: 4% 3%;
      h3 {
        font-size: 4vw;
      }
      img {
        width: 20%;
        margin-left: 80%;
      }
      div {
        font-size: 2vw;
      }
    }

    div.grid {
      display: block;
      div.top-left {
        width: 100%;
      }
    }
  }
  @media (max-width: 520px) {
    div.heading {
      padding: 5% 3%;
      h3 {
        font-size: 5vw;
      }
      img {
        width: 25%;
        margin-left: 75%;
      }
      div {
        font-size: 2.5vw;
        grid-column: 1/3;
      }
    }

    div.grid {
      display: block;
      div.top-left {
        width: 100%;
      }
    }
  }
`;


export const HomeScheduleDiv = styled.div`
  h6 {
    color: black;
  }
  .inside-div-1 {
    display: grid;
    grid-template-columns: 20% 20% 55%;
    grid-template-rows: 100%;
    justify-content: space-evenly;
    position: relative;

    div {
      border-radius: 10px;
      padding: 0% 2%;
      background: rgba(201, 252, 61, 0.597);
    }
    div.task-completed,
    div.task-remaining {
      span {
        font-size: 2.5em;
      }
    }
    div.tasks-desc {
      overflow: auto;
      height: 100%;
      position: absolute;
      margin-left: 45%;
      width: 55%;
      padding: 2%;
      font-size: 0.8em;
      span {
        position: absolute;
        width: 10%;
      }
      li {
        width: 85%;
        margin-left: 15%;
      }

      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #7f9c0cae 202, 7, 0.206;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 900px) {
    h6 {
      padding-left: 6%;
      font-size: 3vw;
    }
    div.inside-div-1 {
      grid-template-columns: 40% 40%;
      grid-template-rows: 40% 55%;
      height: 30vw;
      grid-row-gap: 5%;

      div.task-completed,
      div.task-remaining {
        width: 80%;
        display: grid;
        grid-template-columns: 40% 55%;
        span {
          font-size: 8vw;
          padding-left: 30%;
        }
        p {
          font-size: 3vw;
          padding-top: 10%;
        }
      }

      div.tasks-desc {
        position: relative;
        height: 100%;
        width: 90%;
        grid-column: 1/3;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 520px) {
    div.inside-div-1 {
      grid-template-columns: 45% 45%;
      grid-template-rows: 30% 55%;
      height: 50vw;

      div.task-completed,
      div.task-remaining {
        width: 100%;
      }

      div.tasks-desc {
        width: 100%;
      }
    }
  }
`;

// Home Learning
export const HomeLearningmainDiv = styled.div`
  .learningCard-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25% 25%;
    overflow-x: scroll;
  }
  
  @media (max-width:820px) {
    .learningCard-container {
      grid-template-columns: 30% 30% 30% 30% 30%;
  }
  
  }
  @media (max-width:520px) {
    .learningCard-container {
      grid-template-columns: 45% 45% 45% 45% 45%;
  }
  
  }
`;

// home learning component
export const HomeLearningCardDiv = styled.div`
  border-radius: 10px;
  margin-right: 5%;

.learning-card-div-heading{
  display: grid;
  grid-template-columns: 40% 60%;
  color:black;

  width:95%;
  margin:auto;
  margin-top:2%;
  border-radius: 10px;


  span{
    font-size: 1.2vw;
    margin: auto;
  }
  img{
    width: 70%;
    margin: auto;
    filter:drop-shadow(5px 5px 5px #0b0b0b90);
  }
}

.progress-img-container{
  margin-top:4%;
  display: grid;
  grid-template-columns: 55% 45%;
  .circular-progress{
    width: 60%;
    margin-left: 10%;
    opacity:0.8;
  }
  .tasks-r{
    width: 95%;
    margin-top: 10%;
    text-align: left;
    padding-left: 10%;
    color:black;
    padding-top:10%;
    border-radius:10px;
  }
}

.learning-card-footer{
  background-color: #f5f5f5b3;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  transition: 0.3s;
  padding:2%;

}
.learning-card-footer:hover{
  background-color: white;

}

@media (max-width:820px) {
  .learning-card-div-heading{
  span{
    font-size: 2.2vw;
  }
  img{
    width: 70%;
    margin: auto;
  }
}
}
  

@media (max-width:520px) {
  .learning-card-div-heading{
  span{
    font-size: 3vw;
  }
  img{
    width: 70%;
    margin: auto;
  }
}
} 
`;

// sign in with google btn
export const SignInWithGoogleBtn = styled.div`
  .login-with-google-btn {
    transition: background-color 0.3s, box-shadow 0.3s;

    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;

    &:hover {
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: #eeeeee;
    }

    &:focus {
      outline: none;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
        0 0 0 3px #c8dafc;
    }

    &:disabled {
      filter: grayscale(100%);
      background-color: #ebebeb;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
  }

  body {
    text-align: center;
    padding-top: 2rem;
  }
`;
