import styled from "styled-components";

export const AvatarDiv=styled.div`
    
    .input-img{
        font-size: 0.8vw;
    }

    .modal-demo{
        position:absolute;
        background:#fffefe;
        box-shadow: 2px 2px 10px black;
        top: -20%;
        width: 65%;
        left: 20%;
        padding:5%;
        z-index: 100;
        text-align: center;
        border-radius: 20px;
        .modal-demo-head{
            font-size: 1.2vw;
            text-align: left;
            i{
                position:absolute;
                right:3%;
                top:2%;
                font-size: 1.8vw;
                border: 2px solid black;
                border-radius: 2px;
                padding: 0.5% 2%;
                cursor: pointer;
                transition: 0.4s;
            }
            i:hover{
                background-color: #1e1e1ed7;
                color: white;
            }
        }

        .modal-demo-body{
             
            .cropImage-comp{
                width: 80%;
                margin: auto;
                display: grid;
                grid-template-columns: 20% 80%;
                grid-row-gap: 10%;
                input{
                    width: 90%;
                    margin-left: 10%;
                    background-color: #080808c3;
                    border-radius: 5px;
                    padding: 2%;
                }
            }
        }
        .modal-demo-foot{
            Button{
                font-size:1vw;
                padding: 1% 2%;
                border: 0;
                background:#171717e2;
                color:white;
                transition: 0.3s;
                border-radius: 5px;
            }
            Button:hover{
                padding: 1% 10%;
            }
        }
    }

`