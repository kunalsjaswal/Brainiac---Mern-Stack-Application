import styled from "styled-components";

export const ScheduleDiv=styled.div`
padding-bottom:5%;
padding-left:2%;
   
    h3{
        font-size:1.2em;
        
    }

    div.sc-main-div{

        div.sc-head{
            position: absolute;
            display: flex;
            width: 90%;
            height: 50px;
            background-color: #c9c9c9c1;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            h5{
            border-top-left-radius: 20px;
            background-color: black;
            color:white;
            padding: 0% 1%;

            }
            a{
                text-decoration: none;
                color:black;
                transition: 0.4s;
                padding: 0% 1%;
                font-size: 1vw;
            }
            a.active{
                background-color: #c576ea;
                color: white;
                padding: 0% 2.5%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            a.note-class{
                border-top-right-radius: 10px;
                padding: 0 1%;

            }
            a.note-class.active{
                background-color: black;
            }
           
            button.add-btn{
                position: absolute;
                right: 2%;
                top:0%;
                border: 0;
                padding: 0%;
                font-size: 1.5vw;
                cursor: pointer;
                background:transparent;
            }

            
        }   
        div.sc-body{
            position: absolute;
            width: 90%;
            height: 80%;
            top: 11%;
            background-color: white;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
        }     
    }


    @media (max-width:1280px) {
        div.sc-main-div{
            div.sc-head{
                height: 40px;

                a{
                    font-size: 1.2vw;
                }
            }

            div.sc-body{
                top: 10%;
                height: 70%;
            }

        }
    }
    @media (max-width:1024px) {
        div.sc-main-div{
            div.sc-head{
                height: 40px;

                a{
                    font-size: 1.2vw;
                }
            }

            div.sc-body{
                top: 11%;
                height: 70%;
            }

        }
    }
    @media (max-width:900px) {
        div.sc-main-div{
            margin-top: 6%;
            div.sc-head{
                height: 40px;

                a{
                    font-size: 1.7vw;
                    padding-top: 1%;
                }
                a.active{
                    padding-top: 1%;
                }

                button.add-btn{
                top:20%;
                font-size: 2.5vw;
                }
               
            }

            div.sc-body{
                top: 11%;
                height: 80%;
                padding-bottom: 10%;
            }
           

        }
    }

    @media (max-width:520px) {
        div.sc-main-div{
            margin-top: 6%;
            div.sc-head{
                height: 55px;
                overflow: auto;

                a{
                    font-size: 3vw;
                    min-width: 30%;
                    margin-right: 3%;
                    text-align: center;
                    padding-top: 1% 0%;

                }
                a.active{
                    padding-top: 1%;
                    padding: 1% 5%;
                    width: 20%;
                }
                a.note-class{
                    /* padding-left: 5%; */
                    font-size: 4vw;
                    min-width: 35%;
                    margin-left: 0;
                }
                a.note-class.active{
                    /* width: 50px; */  

                }

                button.add-btn{
                    z-index: 12;
                    position: fixed;
                    top:2%;
                    font-size: 5vw;
                    left: 45%;
                    background-color: #8080805b;
                    width: 10%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
            }

            div.sc-body{
                top: 11%;
                height: 90%;
            }
           

        }
    }

`

export const ScheduleModalDiv=styled.div`
        position:fixed;
        width: 78%;
        left:21%;
        height: 95%;
        z-index: 10;
        background-color: #ffffff9c;
        border-radius: 20px;
        top:2%;
        .main{
            width: 30%;
            background-color: #d8a3f9f5;
            border-radius: 10px;
            margin: auto;
            margin-top: 5%;
            padding: 1%;
            
           
        }
        .header{
            display: grid;
            grid-template-columns: 90% 10%;

            i{
                font-size: 1.5vw;
                margin-top: 20%;
                margin-left: 40%;
                cursor: pointer;
            }

        }

        .body{
            p{
                display: grid;
                grid-template-columns: 30% 30% 30%;
                justify-content: space-between;
                margin:auto;
                padding:1%;
                text-align: center;
                a{
                    font-size: 1vw;
                    i{
                        background-color: #e9d5f57e;
                        cursor: pointer;
                        font-size: 1.5vw;
                        margin-top: 30%;
                        border-radius: 50px;
                        padding: 20% 20%;
                        transition: 0.4s;
                    }
                    i:hover{
                        background-color:#f4eef8 ;
                    }
                }
            }
            
        }
            
        @media (max-width:800px) {
            width: 100%;
            left: 0;
            top: 5%;

            .main{
                width: 50%;

                
            }
            .header{

            i{
                font-size: 3vw;
            }
        }
        .body{
            p{
                grid-template-columns: 30% 30% 30%;
                a{
                    font-size: 3vw;
                    i{
                        background-color: #e9d5f57e;
                        cursor: pointer;
                        font-size: 3vw;
                        margin-top: 30%;
                        border-radius: 50px;
                        padding: 20% 20%;
                        transition: 0.4s;
                    }
                }
            }
        }
    }
        @media (max-width:520px) {
            width: 100%;
            left: 0;
            top: 5%;

            .main{
                width: 80%;
            }
            .header{

            i{
                font-size: 5vw;
            }
        }
        .body{
            p{
                grid-template-columns: 30% 30% 30%;
                a{
                    i{
                        background-color: #e9d5f57e;
                        cursor: pointer;
                        font-size: 5vw;
                        margin-top: 30%;
                        border-radius: 50px;
                        padding: 20% 20%;
                        transition: 0.4s;
                    }
                }
            }
        }

    }

`

export const ScheduleBodyDiv=styled.div`
display: grid;
grid-template-columns: 33% 33% 33%;
justify-content: space-evenly;
margin-top: 1%;
grid-row-gap: 1%;
overflow: auto;
max-height: 98%;
.task-div{
    background-color: #f2dcf89b;
    
    padding: 2%;
    border-radius: 10px;
    transition: 0.4s;

    .task-head{
        position: relative;
        
        i{
            /* background-color: #ffffffd4; */
            font-size: 1.5vw;
            border-radius: 50px;
            padding: 2% 2%;
            transition: 0.4s;
        }
        span{
            margin-left: 2%;
            color:gray;
            
        }
        abbr{
            i{
                display: none;
                font-size: 1.4vw;
                position: absolute;
                right: 0;
                transition: 0.3s;
                /* cursor: pointer; */
                opacity: 0.7;
                color: purple;
                cursor:progress;
            }
        }
        i.fa-trash{
            display: none;
            position: absolute;
            right: 10%;
            transition: 0.3s;
            color: purple;
            opacity: 0.7;
            font-size: 1.4vw;
            cursor: pointer;
            opacity: 0.6;
        }

    }

    .task-body{
        border-radius: 10px;
        background-color: #ebbff79b;
        
        padding: 4%;
        padding-bottom: 10%;

        i{
            border: 2px solid black;
            padding: 1%;
            border-radius: 50px;
            margin-right: 2%;
            cursor: pointer;
        }
    }

}
.task-div:hover{
    background-color: #f2dcf8;

    .task-head{
        abbr{
            i{
                display: inline;
                opacity: 0.6;
            }
            i:hover{
                opacity: 1;
            }
        }
        i.fa-trash{
            display: inline;
            opacity: 0.6;
        }
        i.fa-trash:hover{
            opacity: 1;
        }
        
    }

}

@media (max-width:800px) {
display: grid;
grid-template-columns: 48% 48%;

.task-div{

.task-head{
        i{
            /* background-color: #ffffffd4; */
            font-size: 3vw;
        }
        abbr{
            i{
                font-size: 2.5vw;
            }
        }
        i.fa-trash{
            font-size: 2.5vw;
        }
    }    
  }
}

@media (max-width:520px) {
display: block;

.task-div{
margin-top: 2%;
.task-head{
        i{
            /* background-color: #ffffffd4; */
            font-size: 5vw;
        }
        abbr{
            i{
                font-size: 5vw;
            }
        }
        i.fa-trash{
            font-size: 5vw;
        }
    }    
  }
}
    
`



export const ScheduleNoteDiv=styled.div`
display: grid;
grid-template-columns: 45% 55%;
width: 100%;
/* border: 1px solid black; */
.pie-chart{
    /* border: 1px solid  black; */
    width: 90%;
    padding: 10%;
    .progress-info{
        width: 60%;
        margin: auto;
    }
}

.upcoming-tasks{
    /* border: 1px solid  black; */
    background-color: #f9d3f9;
    width: 100%;
    border-bottom-left-radius: 10px;
    

    .today-tasks{
        /* border: 1px solid black; */

        .taskNo{
            display: grid;
            grid-template-columns: 40% 60%;

            h6{
                font-size: 1vw;
            }
            font-size: 1.5vw;
            width: 60%;
            margin: auto;
            border-radius: 10px;
            background-color:#8e5ffc ;
            color: white;
            padding: 2%;
            margin-top: 5%;
            img{
                width: 60%;
                margin-left: 30%;
            }
        }
        .taskDetails{
            background-color: white;
            width: 60%;
            border-radius: 10px;
            padding: 4% 2%;
            margin: auto;
            margin-top: 4%;
            overflow: auto;
            height: 150px;
            li{
                list-style-position: inside;
                margin-left: 5%;
            }

        }

    }

}

@media (max-width:900px) {
    display: block;

    .pie-chart{
        width: 60%;
        margin: auto;
        padding-top: 2%;
    }
    .upcoming-tasks{
        border-bottom-left-radius: 0px;
        padding-top:2%;
        padding-bottom: 10%;

        
    .today-tasks{
        /* border: 1px solid black; */

        .taskNo{

            h6{
                font-size: 2vw;
            }
            font-size: 3.5vw;
            
        }
        .taskDetails{
            font-size: 2vw;

        }

    }
    }
    
}

@media (max-width:520px) {

    .pie-chart{
        width: 90%;
        margin: auto;
        padding-top: 2%;
    }
    .upcoming-tasks{
        border-bottom-left-radius: 0px;
        padding-top:2%;
        padding-bottom: 10%;

        
    .today-tasks{

        .taskNo{
            width:90%;
            h6{
                font-size: 2.5vw;
            }
            font-size: 4.5vw;
            
        }
        .taskDetails{
            font-size: 3vw;
            width: 90%;

        }

    }
    }
}
    
`