import styled from "styled-components";

export const FitnessMain=styled.div`

    section.f-head{
        img{
            width: 50%;
            margin-left: 25%;
        }
    }
    section.f-body{
        background-color: aliceblue;
        padding: 2%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-bottom: 5%;
        padding-top: 5%;
        h1{
            font-size: 2vw;
            h3{
            position: absolute;
            font-size: 5vw;
            opacity: 0.2;
            margin-left: 15%;
            margin-top: -0%;
            cursor:default;
            color:gray;
        }
        }
        .f-body-courses{
            display: grid;
            grid-template-columns:20% 20% 20% 20% 20% ;
        }
    }

    section.f-body-2{
        background-color: #060606bd;
        padding: 2%;
        color:white;
        padding-top: 5%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius:10px ;

        h1{
            font-size: 2vw;
            span{
                font-size: 0.8vw;
                color:#c6c6c6;
            }
            h3{
                position: absolute;
                font-size: 6vw;
                opacity: 0.2;
                color: gray;
                margin-top: -10%;
                margin-left: 10%;
            }
        }
        div{
            display: grid;
            grid-template-columns: 32% 32% 32%;
            justify-content:space-between;
            img{
                width: 100%;
                border-radius: 10px;
                margin-bottom:5%;
                transition: 0.3s;
            }
            img:hover{
                opacity: 0.8;
            }
        }
    }

    section.feature-program{
        margin-top: 3%;
        h1{
            text-align: center;
            font-size: 2vw;
            span{
                margin-top: -2%;
                font-size: 0.8vw;
            }
        }

        div{
            width: 80%;
            margin: auto;
            display: grid;
            grid-template-columns: 80% 20%;
            padding: 4% 10%;
            /* background-color: ; */
            background: linear-gradient(#935fe5,#6424ca);
            border-radius: 20px;
            p{
                    color: whitesmoke;
            }
            button{
                border: 0;
                padding:0;
                width: 80%;
                height: 60%;
                border-radius: 5px;
                margin-left: 10%;
                transition: 0.4s;
                color: #5d19ca;
            }
            button:hover{
                width: 90%;
            }
            img{
                grid-row: 2;
                grid-column: 1/span 3;
                width: 80%;
                margin-left: 10%;
            }
        }

    }


    @media (max-width:820px) {
        
        section.f-head{
            img{
                width: 100%;
                margin-left: 0%;
                margin-top: 5%;
            }
        }
        section.f-body{
            h1{
                font-size: 4vw;
                h3{
                font-size: 9vw;
                opacity: 0.3;
            }
            }
            .f-body-courses{
                display: grid;
                grid-template-columns:32% 32% 32%  ;
            }
        }

        section.f-body-2{
            h1{
                font-size: 5vw;
                span{
                font-size: 2vw;
                color:#c6c6c6;
            }
            }
            div{
                grid-template-columns: 48% 48%;
            }
        }

        section.feature-program{
            h1{
                font-size: 4vw;
                span{
                    font-size: 1.8vw;
                }
            }

            div{
                width: 90%;
                button{
                    width: 90%;
                    height: 50%;
                }
                button:hover{
                    width: 100%;
                }
                img{
                    width: 90%;
                    margin-left: 5%;
                }
            }

        }
    }


    @media (max-width:520px) {
        
        section.f-head{
            img{
                width: 100%;
                /* border: 1px solid black; */
                margin-left: 0%;
                margin-top: 5%;
            }
        }

        section.f-body{
            h1{
                font-size: 6vw;
                padding-left: 15%;
                h3{
                font-size: 12vw;
                opacity: 0.3;
            }
            }
            .f-body-courses{
                display: grid;
                grid-template-columns:70% ;
                justify-content: center;
            }
        }
        section.f-body-2{
            h1{
                font-size: 6vw;

            }
            div{
                grid-template-columns: 80%;
                justify-content: center;
            }
        }

        section.feature-program{
            h1{
                font-size: 6vw;
                span{
                    font-size: 2.8vw;
                }
            }

            div{
                width: 100%;
                button{
                    width: 100%;
                    height: 80%;
                    margin-left: 0;
                }
                button:hover{
                    width: 120%;
                }
                p{
                    font-size: 3vw;
                }
                img{
                    width: 100%;
                    margin-left: 0%;
                }
            }

        }
    }

`
