import styled from 'styled-components'

export const CourseLearningMainDiv = styled.div`
   widows: 100%;
   height: 100%;
   .course-heading {
      display: flex;
      justify-content: center;

      h1 {
         /* margin-left: auto; */
         font-family: 'Quicksand', sans-serif;
      }
      .navlink-to-home {
         /* margin-left: auto; */
      }
   }
`

export const CourseLearningMainBody = styled.div`
   .learning-content-container {
      /* min-height: 72vh; */
      h4 {
         padding: 20px;
      }
      p {
         font-family: 'Quicksand', sans-serif;
         /* padding-bottom: 10px; */
         padding-left: 40px;
      }
      img {
         width: 60%;
         border-radius: 10px;
      }
      .divider {
         padding: 10px;
      }
   }

   .pagination {
      margin-top: 10px;
      text-align: center;
      justify-content: center;
      margin-bottom: 30px;
      .page-no {
         display: inline;
         padding: 8px;
         padding-left: 15px;
         padding-right: 15px;
         border-radius: 30px;
         color: white;
         background-image: linear-gradient(
            to left,
            #a586fd,
            #af7cf6,
            #b972ed,
            #c267e4,
            #af6dea
         );
      }
   }
`

export const CourseLearningNavbarMainDiv = styled.div`
   /* height: 50px; */
   /* position: sticky; */
   /* top: -15px; */
   background-image: linear-gradient(
      to left,
      #0cbaff,
      #43adff,
      #769cff,
      #a586fd,
      #af7cf6,
      #b972ed,
      #c267e4,
      #af6dea
   );
   border-radius: 20px;
   ul {
      list-style-type: none;
      padding: 10px;
      font-size: 20px;
      padding: 10px;
   }
   li {
      /* padding: 10px; */
      display: inline;
      margin-left: 10px;
      padding: 10px;
      border-radius: 10px;

      color: white;
   }
   li:hover {
      background-color: white;
      color: black;
      transition: all 0.5s;
   }
`

export const LearningIntroMainDiv = styled.div`
   .intro-upper-part {
      display: flex;
      .intro-img-container {
         /* margin: 10px; */
         margin-top: 10px;
         text-align: center;
         img {
            /* border: 1px solid black; */
            border-radius: 2px;
            width: 60%;
         }
         .intro-start-btn {
            margin-top: 10px;
            button {
               width: 70%;
               background-color: #1b1b1bea;
               transition: 0.3s;
               opacity: 0.8;
            }
            button:hover {
               width: 80%;
               opacity: 1;
            }
         }
      }
      .intro-data {
         margin: 20px;
      }
   }
   .intro-middle-part {
      background-color: white;
      margin: 15px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 10px;
      .intro-progress-container {
         margin: auto;
      }
      .recalculate-btn-container {
         display: flex;
         button {
            margin-left: auto;
            margin-right: 10px;
            margin-bottom: 10px;
            color: black;
            border-color: black;
         }
      }
   }
   .intro-bottom-part {
      margin-left: 30px;
      .chips-container {
         margin-left: 20px;
         display: flex;
         gap: 15px;
      }
   }
`
