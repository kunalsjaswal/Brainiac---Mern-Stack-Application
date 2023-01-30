import styled from "styled-components";

export const HomeFitnessDiv=styled.div`
.main-hf{
    color: white;
    padding: 2% 0%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 48% 50%;
    grid-column-gap: 2%;

    .prog-hf{
        background-color: #ea2323ca;
        padding:8% 2%;
        border-radius: 10px;
        span{
            font-size: 1.4vw;
        }
        button{
            padding: 1% 5%;
            border-radius: 5px;
            background-color: #000000ba;
            color:white;
            transition: 0.3s;
            border: 0;
            margin-top: 5%;
        }
        i{
            padding-top: 5%;
            font-size: 3vw;
            color: black;
        }

        button:hover{
            padding: 1% 10%;
        }
    }
    .subPrograms{
        display: grid;
        grid-template-columns: 55% 42%;
        padding: 1%;
        grid-gap: 3%;
        section{
            font-size: 1vw;
            color: white;
            border-radius: 5px;
            background-color: #000000cf;
            padding: 2%;
            div{
                padding: 1% 2%;
                margin-bottom: 7%;
            }
        }

    }
}
`