import styled from 'styled-components'

export const NavbarDiv = styled.div`
   display: grid;
   height: 100%;
   grid-template-rows: 15% 70% 15%;

   .heading {
      border-top-right-radius: 30px;
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      a {
         display: flex;
         text-decoration: none;
         color: black;
         justify-content: left;
         padding-left: 6%;
         h2 {
            text-align: left;
            margin-top: 6%;
            color: white;
         }
         img {
            width: 15%;
         }
      }
      .cross {
         display: none;
         color: white;
      }
   }
   .links {
      display: flex;
      flex-direction: column;

      a {
         color: white;
         margin-bottom: 5%;
         width: 60%;
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
         padding: 1% 8%;
         text-decoration: none;
         font-size: 1em;
         transition: 0.6s;
      }

      a:hover {
         background: rgba(255, 255, 255, 0.218);
      }
      a.active {
         color: black;
         width: 70%;
         background: white;
         padding: 2% 10%;
         font-size: 1em;
         font-weight: bold;
         box-shadow: 1px 1px 15px #0000007b;
      }
   }
   .foot {
      width: 80%;
      padding: 2%;
      text-align: center;
      margin-left: 5%;
      background: rgba(255, 255, 255, 0.418);
      border-radius: 10px;
      color: white;
   }

   @media (max-width: 1200px) {
      .links {
         a {
            font-size: 1em;
         }
         a.active {
            font-size: 1.2em;
         }
      }
   }
   @media (max-width: 1024px) {
      .links {
         a {
            font-size: 0.8em;
         }
         a.active {
            font-size: 1em;
            padding: 1% 10%;
         }
      }

      .foot {
         font-size: 0.8em;
      }
   }
   @media (max-width: 900px) {
      .heading {
         h2 {
            font-size: 5vw;
         }
         .cross {
            display: block;
         }
      }
      .links {
         a {
            font-size: 1.4em;
         }
         a.active {
            font-size: 1.5em;
         }
      }
   }
   @media (max-width: 520px) {
      .heading {
         h2 {
            font-size: 8vw;
         }
      }
      .links {
         a {
            font-size: 1.2em;
         }
         a.active {
            font-size: 1.3em;
         }
      }
   }
   .followUs-container {
      margin-left: 40px;
      margin-top: 20px;
      margin-right: 40px;
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 10px;
      img {
         width: 35px;
         border-radius: 30px;
      }
      img:hover {
         scale: 1.2;
         transition: all 0.5s;
      }
   }
`
