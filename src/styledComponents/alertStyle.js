import styled from "styled-components";

export const AlertDiv=styled.div`
    position:fixed;
    opacity: 0.9;
    padding: 1% 5%;
    width: 40%;
    text-align: center;
    border-radius: 10px;
    color:white;
    left: 30%;
    animation: alert-anim 0.5s linear 0s 1;
z-index: 10;
    @keyframes alert-anim {
        0%{
            top: -5%;
        }
        100%{
            top: 2%;
        }
    }
`