import styled from "styled-components";

export const LandingPageDiv=styled.div`
        /* background-color: white; */
        /* border-radius: 20px; */
    .intro-sec{
        display: grid;
        grid-template-columns: 60% 40%;
        margin-bottom: 5%;
        h1{
            font-size: 10vw;
            text-shadow: 10px 10px 10px #0202027f;

            h3{
                text-shadow: 0px 0px 0px transparent;
            }
            p{
                font-size: 1.2vw;
                text-align: justify;
                width: 90%;
                text-shadow: 0px 0px 0px transparent;
            }
            button{
                border: 0px;
                background-color: #ec00007b;
                color:white;
                width: 50%;
                transition: 0.4s;
                margin-left: 8%;

            }
            button:hover{
                width: 60%;
            }            
        }

        img{
            width: 100%;
            animation: brain-anim 3s normal 0s infinite;

            
        }
        @keyframes brain-anim {
            0%{
                filter: drop-shadow(2px 2px 30px transparent);
            }
            70%{
                filter: drop-shadow(2px 2px 30px black);
            }
        }
       
    }

    .all-sec{
        h1{
            font-size: 5vw;
            padding-left: 0%;
        }
        .grid-all{
            display: grid;
            width: 100%;
            height: 60%;

            grid-template-columns: 50% 50%;
            grid-template-rows: 18% 18% 18% 18%;
            video{
                grid-column: 1;
                grid-row: 1/span 5;
                width: 100%;
                height: 85%;
                padding-top: 5%;
            }
            div{
                display: grid;
                grid-template-columns: 20% 80%;
                padding: 0;
    
                h1{
                    grid-column: 1;
                    grid-row: 1/span 2;
                    font-size: 8vw;
                    padding-left: 20%;
                    height: 80%;
                    padding-top: 10%;
                }
                h2{
                    padding-top: 8%;
                    font-size: 2vw;
                }
                p{
                    margin-top: -5%;
                    font-size: 1vw;
                }
            }
        }
    }

    
    @media (max-width:820px) {
        .intro-sec{
            margin-top: 5%;
            h1{
                p{
                    font-size: 2vw;
                }
            }
        }

        .all-sec{
            h1{
                    text-align: center;
                    font-size: 7vw;
            }
            .grid-all{
                display: block;
                width: 100%;

                
                video{
                    width: 60%;
                    margin-left: 20%;
                }
                div{
                    width:90% ;
                    margin-top: 2%;
                    h1{
                        font-size: 10vw;
                    }
                    h2{
                        font-size: 4vw;
                        margin-top: -5%;
                    }
                    p{
                        font-size: 2vw;
                        margin-top: 0%;
                    }
                }
        }
    }

    }
    @media (max-width:520px) {
        .intro-sec{
            margin-top: 5%;
            display: block;
            h1{
            font-size: 10vw;
            text-align: center;
            h3{
                font-size: 4vw;

            }
            p{
                font-size: 2.2vw;
                text-align: justify;
                width: 90%;
                margin: auto;
                text-shadow: 0px 0px 0px transparent;
            }
            button{
                border: 0px;
                background-color: #ec00007b;
                color:white;
                width: 80%;
                margin-top: 2%;
                transition: 0.4s;
                margin-left:0%;

            }
            button:hover{
                width: 100%;
            }            
          }

            img{
                width: 80%;
                margin-left: 10%;
                filter: drop-shadow(2px 2px 30px black);
            }
        }

        .all-sec{
            margin-top: 10%;
            h1{
                    font-size: 8vw;
            }
            .grid-all{
                video{
                    width: 80%;
                    margin-left: 10%;
                }
                div{
                    width:90%;
                    margin-top: 2%;
                    h1{
                        padding-top:0;
                        font-size: 18vw;
                    }
                    h2{
                        font-size: 4.5vw;
                        margin-top: -5%;
                    }
                    p{
                        font-size: 3vw;
                        margin-top: 0%;
                    }
                }
        }
    }

    }
`