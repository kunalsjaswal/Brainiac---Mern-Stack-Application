import styled from 'styled-components'

export const PostModelContainer = styled.div`
   h4 {
      text-align: center;
   }
   .post-caption-input {
      margin: 10px;
      padding: 10px;
      width: 100%;
      border: none;
      text-decoration: none;
   }
   .input-img-border {
      margin: 20px;
      border: 1px solid #707070;
      border-radius: 10px;
      text-align: center;
      .input-img-label {
         color: white;
         font-size: 22px;
         margin: 10px;
         border-radius: 10px;
         cursor: pointer;


         // define ratio for post 
         width: 95%;
         height: 280px;
         background-color: #505050;
         text-align: center;
         img {
            margin-top: 50px;
            width: 60px;
         }
         .post-img-input {
            display: none;
         }
      }
   }
   .div-button {
      margin-bottom: 10px;
   }
`
