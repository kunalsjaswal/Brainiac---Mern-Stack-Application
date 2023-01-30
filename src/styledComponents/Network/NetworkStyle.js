import styled from 'styled-components'

export const NetworkMainDivContainer = styled.div`
   /* background-color: red; */
   height: 100vh;
`

export const NetworkNavbarContainer = styled.div`
   border-radius: 30px;
   overflow: hidden;
`
export const NetworkBody = styled.div`
   margin: 40px;
   /* margin-left: 250px; */
   /* margin-right: 250px; */
   display: grid;
   grid-template-columns: 3fr 1fr;
   grid-gap: 10px;
   .profilecontainer {
      // making sticky
      position: sticky;
      top: 20px;

      background-color: white;
      /* border: 1px solid red; */
      border-radius: 30px 30px 0px 0px;

      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
      .img-container {
         text-align: center;
         img {
            width: 300px;
            border-radius: 20px 20px 0px 0px;
            /* height: 120px; */
         }
         #profile-img {
            margin-top: -80px;
            text-align: center;
            width: 50%;
            border-radius: 900px;
         }
      }
      .profile-name {
         text-align: center;
      }
      .profile-details {
         padding-top: 10px;
         padding-bottom: 10px;
         .align-profile-details {
            display: flex;
            margin: 10px;
            margin-left: 20px;
            margin-right: 20px;
         }
         .counting {
            margin-left: auto;
            color: violet;
         }
      }
   }
   .profile-bottom-part {
      position: sticky;
      top: 420px;
      margin-top: 10px;
      padding: 20px;
      background-color: white;
      border-radius: 0 0 20px 20px;
   }
`

// currently commented
export const AddPostContainer = styled.div`
   /* background-color: #e5ccc3; */
   background-color: white;
   padding: 20px;
   border-radius: 10px;

   .img-upload-container {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
         margin-left: 10px;
      }
   }
   .text-area-post-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .text-area-container {
         margin: 10px;
         width: 80%;
      }
   }
`

export const NetworkPostCardContainer = styled.div`
   /* background-color: white; */
   width: 100%;
   margin-top: 20px;
   .post-empty-card {
      background-color: white;
      width: 600px;
      height: 300px;
      box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      text-align: center;
      margin-top: 30px;
      margin-left: 95px;
      .empty-text {
         font-size: 1.2em;
         padding-top: 120px;
      }
   }
   .post-card-container {
      margin-bottom: 20px;
      /* background-color: white; */
      width: 100%;
      display: flex;
      justify-content: center;
      .network-post-card {
         background-color: white;
         border-radius: 10px;
         box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
      }
   }
`

export const NewAddPostContainer = styled.div`
   background-color: white;
   // width of add post
   width: 600px;
   margin: auto;
   box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
   .add-post-upper-part {
      margin: 10px;
      padding: 10px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      gap: 20px;
      .add-post-avatar {
         margin-top: 10px;
      }
      .upper-part-input {
         margin-top: 10px;
         padding: 10px;
         width: 180%;
         font-size: 18px;
         border-radius: 30px;
         text-decoration: none;
      }
   }
   .add-post-lower-part {
      display: flex;
      justify-content: center;
      div {
         margin: 10px;
         padding: 5px;
         img {
            width: 40px;
         }
         span {
            margin-left: 5px;
         }
      }
   }
`
