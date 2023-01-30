import { useContext } from "react";
import styled from "styled-components";
import taskContext from "../context/taskContext";

// changing theme color

// const {bg_color}=useContext(taskContext);
const right_theme_color = "#EEE2EE"; // same applied to body bg - change in index.css too

// #####

export const LayoutDiv = styled.div`
  position: relative;

  .click {
    display: none;
  }

  .left-aside {
    position: fixed;
    height: 100%;
    width: 20%;
    padding: 1% 0%;
    transition: 0.5s;

  }
  

  .right-aside {
    transition: 0.5s;
    position: fixed;
    border-top-left-radius:30px;
    border-bottom-left-radius:30px;
    border-top-right-radius:30px;
    border-bottom-right-radius:30px;
    padding: 1%;
    width: 79%;
    height: 98%;
    margin-top: 0.5%;
    margin-left: 20%;
    background: ${right_theme_color};
    overflow: auto;
    }


    @media(max-width:900px){

        .click{
           transition: 0.8s;
            display:block;
            z-index:10;
            position:fixed;
            background:transparent;
            width:6%;
            height:4.5%;
            color:black;
            font-size:1.8em;
            margin-top:0.5%;
            margin-left: 0.5%;
            border: 2px solid black;
            border-radius:5px;
           i{
            margin-left: 20%;
           }

        }

        .left-aside{
            z-index:5;
            display:none;
            width:50%;
            transition:0.5s;
            animation: navleft 0.5s linear 0s 1;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }

        .right-aside{
            width:100%;
            margin-left:0;
            border-top-left-radius:0px;
            border-bottom-left-radius:0px;
            border-bottom-right-radius:0px;
            border-top-right-radius:0px;
            height:100%;
            margin-top: 0;

        }

        @keyframes navleft {
            0%{
                width:0%;
                opacity:0;
            }
            50%{
                width:20%;
                opacity:0.5;

            }
            100%{
                opacity:1; 
                width:40%;
            }
        }

  @media (max-width: 520px) {
    .click {
      width:8%;
      height: 4%;
      font-size: 1.2em;
    }
    .left-aside {
      width: 80%;
    }

    @keyframes navleft {
      0% {
        width: 0%;
        opacity: 0;
      }
      50% {
        width: 30%;
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        width: 65%;
      }
    }
  }
}

`
