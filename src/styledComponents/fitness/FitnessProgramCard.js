import styled from "styled-components";

export const FitnessProgramCard=styled.div`
    margin-right: 2%;
    padding: 0% 5%;
    padding-top: 5%;
    padding-bottom: 4%;
    border-radius: 10px;
    /* background-color: #f05e5ee3; */
    background-color: #262525d7;
    transition: 0.3s;
    color:white;
    i{
        font-size: 2.5vw;
        margin-left: 5%;
        color:#cb4af6;
    }
    h2{
        font-size: 1.5vw;
        margin-top: 5%;
    }
    p{
        text-align: left;
        font-size: 0.8vw;
        color: #d8d8d8;
        min-height: 30%;
    }
    button{
        border: 0;
        border-radius: 5px;
        background-color: #cb4af6;
        color: white;
        padding: 1% 3%;
        transition: 0.2s;
    }
    button:hover{
        background-color: #d409b9;
        padding: 1% 5%;

    }

    @media (max-width:820px) {
            padding-bottom: 8%;
            margin-bottom: 5%;
            margin-right: 5%;
            i{
            font-size: 4.5vw;
            margin-left: 5%;
            color:#cb4af6;
        }
        h2{
            font-size: 2.5vw;
            margin-top: 5%;
        }
        p{
            text-align: left;
            font-size: 1.5vw;
            color: #d8d8d8;
            min-height: 30%;
        }
        button{
            border: 0;
            border-radius: 5px;
            background-color: #cb4af6;
            color: white;
            padding: 1% 3%;
            transition: 0.2s;
        }
        button:hover{
            background-color: #d409b9;
            padding: 1% 5%;

        }
    }

    @media (max-width:520px) {
            padding-bottom: 8%;
            margin-bottom: 5%;
            margin-right: 5%;
            i{
            font-size: 7.5vw;
            margin-left: 5%;
            color:#cb4af6;
        }
        h2{
            font-size: 4vw;
            margin-top: 5%;
        }
        p{
            text-align: left;
            font-size: 2.5vw;
            color: #d8d8d8;
            min-height: 30%;
        }
        button{
            border: 0;
            border-radius: 5px;
            background-color: #cb4af6;
            color: white;
            padding: 1% 3%;
            transition: 0.2s;
        }
        button:hover{
            background-color: #d409b9;
            padding: 1% 5%;

        }
    } 
`