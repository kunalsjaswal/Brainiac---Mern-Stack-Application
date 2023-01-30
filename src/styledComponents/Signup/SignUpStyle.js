import styled from "styled-components";

export const SignUpDiv=styled.div`
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: 50% 50%;

    .left-part{

        /* border-right: 2px solid black; */
        background-color: #d178ee76;
        border-radius: 10px;
        padding: 2%;
        img{
            width: 65%;
            margin: auto;
            margin-top: 8%;
            margin-bottom: 15%;
            height: 35vw;
            border-radius: 20px;
        }
    }
   .right-part{
        padding: 5%;
        border-radius: 10px;
        background-color: #dec8f0b8;
        position: relative;
        
        .form-head{
            text-align: center;

            i{
                border: 3px solid black;
                padding: 2% 2.5%;
                border-radius: 15px;
            }
            h1{
                font-size: 1.5vw;
                margin-top: 5%;
            }
            img{
                width:15%;

            }
            p{
                font-size: 0.8vw;
            }
        }

        .form-footer{
            position: absolute;
            bottom: 1%;
            width: 90%;
            text-align: center;

            b{
                text-decoration:underline ;
                cursor: pointer;
            }
        }
   }

   @media (max-width:900px) {
    display: block;
    .left-part{
        display: none;
        /* display: none; */
    }
    .right-part{
        
        .form-head{
            text-align: center;

            i{
                border: 3px solid black;
                padding: 2% 2.5%;
                border-radius: 15px;
            }
            h1{
                font-size: 3.5vw;
                margin-top: 5%;
            }
            img{
                width:15%;

            }
            p{
                font-size: 1.8vw;
            }
        }

        .form-footer{
            position: absolute;
            bottom: -10%;
            width: 90%;
            text-align: center;
            padding-bottom: 10%;
            b{
                text-decoration:underline ;
                cursor: pointer;
                margin-top: 2%;
            }
        }
   }
    }

    @media (max-width:520px) {
   
    .right-part{
        
        .form-head{

            i{
                border-radius: 10px;
            }
            h1{
                font-size: 5vw;
            }
            img{
            }
            p{
                font-size: 3vw;
            }
        }

        .form-footer{
            position: absolute;
            bottom: -10%;
            width: 90%;
            text-align: center;
            padding-bottom: 10%;
            b{
                text-decoration:underline ;
                cursor: pointer;
                margin-top: 2%;
            }
        }
   }
    }
    
`


export const SignUpCardDiv=styled.div`
padding: 5%;
border-radius: 10px;
background-color: aliceblue;

form{
    width: 80%;
    margin: auto;
}


button.google{
    border: 0;
    background:transparent;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    margin-left: 25%;
    width: 50%;
    padding: 2%;
    margin-top: 2%;
    transition: 0.3s;
    img{
        width: 10%;
        margin-right: 3%;

    }
}

button.google:hover{
    border-color: green;
}
span.tick-cross{
    position:absolute;
    font-size:2vw;
}

@media (max-width:900px) {
    span.tick-cross{
    font-size:3vw;
    }
}
@media (max-width:520px) {
    span.tick-cross{
    font-size:5vw;
    }
    div.sel-avatar{
        width: 120%;
        font-size: 3vw;
        margin-right: 10%;
        padding-top: 5%;
    }
    button.google{
        width: 80%;
        margin-left: 10%;
    }
}

`


export const LoginCardDiv=styled.div`
padding: 5%;
background-color: aliceblue;
border-radius: 10px;

form{
    width: 80%;
    margin: auto;
}
span.tick-cross{
    position:absolute;
    font-size:2vw;
}
button.google{
    border: 0;
    background:transparent;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    margin-left: 25%;
    width: 50%;
    padding: 2%;
    margin-top: 2%;
    transition: 0.3s;
    img{
        width: 10%;
        margin-right: 3%;

    }
}

button.google:hover{
    border-color: green;
}
@media (max-width:900px) {
    span.tick-cross{
    font-size:3vw;
    }
}
@media (max-width:520px) {
    span.tick-cross{
    font-size:6vw;
    }
    button.google{
        width: 80%;
        margin-left: 10%;
    }
}
`