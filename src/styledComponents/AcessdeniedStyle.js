import styled from "styled-components";

export const AccessDeniedDiv=styled.div`

/* box-shadow: 1px 1px 5px gray; */
background-color: #c15bda59;
border-radius: 5px;
padding: 3%;
width: 40%;
margin: auto;
text-align: center;
i{
font-size: 5vw;
}
div{
    margin-top: 5%;
    font-size: 1.5vw;
    margin-bottom: 2%;

}

a{
    font-size: 1.2vw;
    padding: 1% 8%;
    border-radius: 5px;
    background-color: #6a0962;
    color: #bcbaba;
    transition: 0.3s;
    text-decoration: none;
}
a:hover{
    padding:1% 13%;
}
img{
    width: 50%;
    margin-top: 2%;
    filter: drop-shadow(2px 2px 5px gray);
}
`