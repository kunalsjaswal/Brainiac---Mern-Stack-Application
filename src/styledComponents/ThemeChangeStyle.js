import styled from "styled-components";

export const ThemeDiv=styled.div`
    
    h1{
        text-align: center;
    }
    .themes{

        width: 80%;
        margin: auto;
        margin-top: 2%; 
        display:grid;
        grid-template-columns: 50% 50%;
        justify-content: space-evenly;

        section{
            align-items: center;
            justify-content: center;
            margin-bottom: 10%;
            transition: 0.5s;

            h4{
                font-size: 1.2vw;
                text-align: left;
            }
            img{
                width: 80%;
                transition: 0.5s;
                cursor: pointer;
            }
            img:hover{
                box-shadow: 2px 2px 10px black;
            }
        }
    }
`