import { AlertTitle, Avatar, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NewAddPostContainer } from '../../styledComponents/Network/NetworkStyle'
import AddPostModel from './AddPostModel'
import photoimg from '../../images/network/icons8-picture.gif'
import docImg from '../../images/network/document.png'
import artImg from '../../images/network/icons8-news.svg'
import taskContext from '../../context/taskContext'
import { Alert } from '@mui/material'


const imgArr=[{
   name:"Photo",
   icon:photoimg
},
{
   name:"Documents",
   icon:docImg
},
{
   name:"Write Article",
   icon:artImg
}]
const AddPost = () => {
  

   const {userD,networkPosts,setNetworkPosts,getUserData,alert}=useContext(taskContext)
   const [captionData, setcaptionData] = useState("")

   useEffect(()=>{
      getUserData()
   },[])
   const [postImg,setpostImg]=useState({
      userProfilePic:'',
      scaleValue:1
    });
    
   return (
      <NewAddPostContainer>
         <div className="add-post-upper-part">
            <div className="add-post-avatar">
               <Avatar />
            </div>
            <div>
               <input
                  className="upper-part-input"
                  type="text"
                  placeholder={`What's on your mind, ${userD.username}?`}
                  value={captionData}
                  onChange={(e)=>setcaptionData(e.target.value)}
               />
            </div>
         </div>
         <Divider />
         <div className="add-post-lower-part">
            {
               imgArr.map((val,ind)=>
               <div>
                  <span>
                     <AddPostModel  key={ind} userD={userD} networkPosts={networkPosts} setNetworkPosts={setNetworkPosts} captionData={captionData} setcaptionData={setcaptionData} postImg={postImg} setpostImg={setpostImg} name={val.name} icon={val.icon} />
                  </span>
               </div>)
            }
           
         </div>
         {
            alert[1]==='true'
            &&
            <Alert severity={alert[2]}>
               <AlertTitle>{alert[2]}</AlertTitle>
               {alert[0]}
            </Alert>
         }

      </NewAddPostContainer>
   )
}

export default AddPost
