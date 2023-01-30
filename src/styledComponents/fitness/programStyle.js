import styled from "styled-components";

export const ProgramDiv=styled.div`
    .main-anim{
        width: 100%;
        /* height: 50vw; */
        /* animation: start-anim 0.5s linear 0s 1 normal; */
        /* animation-timing-function: ease-out; */
        overflow: hidden;

        .head{
            i{
                font-size: 1.6vw;
                /* border: 3px solid black; */
                cursor: pointer;
            }
            span{
                margin-left: 3%;
                font-size: 1.6vw;
            }
        }
    }
    @keyframes start-anim {
        0%{
            width: 0;
            height: 0;
            margin-left: 50%;
            margin-top: 20%;

        }
        100%{
            width: 100%;
            height: 50vw;
            margin: 0;

        }
    }

`