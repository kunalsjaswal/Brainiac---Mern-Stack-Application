import styled from 'styled-components'

export const LearningDivContainer = styled.div`
    padding-left: 50px;
    padding-right: 50px;
    width: auto;
    height: auto;
    background-color: transparent;
    .learning-heading {
        text-align: center;
    }
    @media (max-width: 992px) {
        padding-left: 0;
        padding-right: 0;
    }
`

export const CourseDivContainer = styled.div`
    padding: 30px;
    padding-top: 45px;
    /* padding-bottom: 120px; */
    // cards background
    border-radius: 10px;

    display: grid;
    justify-content: space-evenly;

    grid-template-columns: 30% 30% 30%;

    /* border: 1px solid black; */

    grid-row-gap: 5%;

    .course-card {
        transition-property: scale;
        transition-duration: 0.3s;
        transition-timing-function: linear;
        width: 100%;
        /* display: flex; */

        border-radius: 10px;
        /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6); */

        .course-img-container {
            display: grid;
            grid-template-columns: 60% 40%;
            /* align-items: center; */
            div {
                font-size: 0.8vw;
                text-align: left;
            }
            img {
                margin: 10px;
                height: 100px;
                width: 100px;
                filter: drop-shadow(0px 30px 10px #2f2f2ed2);
                transition: 0.4s;
            }
        }

        .course-side-container {
            padding: 10px;
            padding-right: 20px;
            /* border: 1px solid black; */
            margin-left: auto;
            width: auto;
            text-align: end;
            h6 {
                margin-top: 10px;
                font-size: 1vw;
                text-align: left;
                font-family: monospace;
            }
            h2 {
                text-align: left;
                font-size: 2vw;
                /* text-align: center; */
            }
            .progress {
                margin-top: 20px;
            }
            .course-nav-btn {
                /* text-align: center; */
                margin-top: 20px;
                opacity: 0.8;
                transition: 0.2s;
                a {
                    text-decoration: none;

          button {
            background-color: #1b1b1bea;
            width: 50%;
            color: white;
            transition: 0.3s;
          }
          button:hover {
            width: 70%;
          }
        }
      }
    }
  }
  #empty-course-card:hover {
    scale: 1;
  }
  .course-card:hover {
    scale: 1.02;

    .course-img-container {
      img {
        filter: drop-shadow(0px 10px 10px #2f2f2ed2);
      }
    }

    .course-nav-btn {
      opacity: 1;
    }
  }

  
  @media (max-width: 1268px) {
    grid-template-columns: 40% 40%;
    grid-row-gap: 10%;
  }
  @media (max-width: 992px) {
    grid-template-columns: 70%;
    grid-row-gap: 5%;
    padding: 0;
    padding-top: 30px;
    padding-bottom: 300px;
    margin-bottom: 30px;
    
  .course-card {
    
    .course-img-container {
      div{
        font-size: 1vw;
        width: 90%;
      }
      img {
        height: 100px;
        width: 100px;
      }
      
    }
   
    .course-side-container {
      h6 {
        font-size: 2.5vw;
      }
      h2 {
        font-size: 6vw;
      }
      .course-nav-btn {
        /* text-align: center; */
      }
    }
  }
  }
    #empty-course-card:hover {
        scale: 1;
    }
    .course-card:hover {
        scale: 1.02;

        .course-img-container {
            img {
                filter: drop-shadow(0px 10px 10px #2f2f2ed2);
            }
        }

        .course-nav-btn {
            opacity: 1;
        }
    }

    @media (max-width: 1268px) {
        grid-template-columns: 40% 40%;
        grid-row-gap: 10%;
    }
    @media (max-width: 992px) {
        grid-template-columns: 70%;
        grid-row-gap: 5%;
        padding: 0;
        padding-top: 30px;
        padding-bottom: 300px;
        margin-bottom: 30px;

        .course-card {
            .course-img-container {
                div {
                    font-size: 1.5vw;
                    text-align: left;
                    width: 70%;
                }
                img {
                    margin: 0px;
                    height: 150px;
                    width: 150px;
                }
            }

            .course-side-container {
                padding: 10px;
                padding-right: 20px;
                /* border: 1px solid black; */
                margin-left: auto;
                width: auto;
                text-align: end;
                h6 {
                    font-size: 2vw;
                }
                h2 {
                    font-size: 5vw;
                }
                .progress {
                    margin-top: 20px;
                }
                .course-nav-btn {
                    /* text-align: center; */
                    margin-top: 20px;
                    opacity: 0.8;
                    transition: 0.2s;
                    a {
                        text-decoration: none;

                        button {
                            background-color: #1b1b1bea;
                            width: 50%;
                            color: white;
                            transition: 0.3s;
                        }
                        button:hover {
                            width: 70%;
                        }
                    }
                }
            }
        }
    }
`;
