import * as React from 'react'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, Divider } from '@mui/material'
import { PostModelContainer } from '../../styledComponents/Network/AddPostModelStyle'

import { useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useCallback } from 'react'
import CropImageNetwork from './CropImageNetwork'
import { useRef } from 'react'
import {AvatarNetworkDiv} from '../../styledComponents/Network/AvatarNetworkDiv'
import { useContext } from 'react'
import taskContext from '../../context/taskContext'
import { useEffect } from 'react'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   // border: '2px solid #000',
   boxShadow: 24,
   p: 4,
   borderRadius: 5,
}

export default function AddPostModel({setNetworkPosts,networkPosts, name ,icon,postImg,setpostImg,setcaptionData,captionData,userD}) {
   const [opens, setOpens] = useState(false)
   const handleOpen = () => setOpens(true)
   const handleClose = () => setOpens(false)

   const {getNetworkPosts,setAlert,resetAlert}=useContext(taskContext)

   const [isOpen,setIsOpen]=useState(false);
   const open=useCallback(()=>setIsOpen(true))
   const close=useCallback(()=>setIsOpen(false))

   useEffect(()=>{
      getNetworkPosts()
   },[])
  const setEditorRef=useRef(null);


    const onCrop=(e)=>{
      e.preventDefault()
      if(setEditorRef!=null){
  
        const url = setEditorRef.current.getImageScaledToCanvas().toDataURL();
        setpostImg((prev)=>({...prev,userProfilePic:url}))
        close();
        handleOpen()
  
      }
    }
    
    const onScaleChange=(scaleChangeEvent)=>{
      const scaleValue=parseFloat(scaleChangeEvent.target.value);
      setpostImg((prev)=>({...prev,scaleValue:scaleValue}))
  
    }

   //  on change event on input file 
   const performImageChange=(fileChangeEvent)=>{
      const file=fileChangeEvent.target.files[0];
      setpostImg((prev)=>({...prev,selectedImage:file}))
      open()
      handleClose()
    }

   //  post request for uploading Post
   const onPostClickHandler=async(e)=>{
      e.preventDefault()

      const response=await fetch('http://localhost:5000/brainiac/addPost',{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            auth_token: localStorage.getItem('token'),
         },
         body: JSON.stringify({username:userD['username'], userProfile:userD['imgUrl'], imgUrl:postImg.userProfilePic,caption:captionData}),
      })
      const data=await response.json()
      setNetworkPosts(networkPosts.concat(data))
      setcaptionData("")
      setpostImg({
         userProfilePic:'',
         scaleValue:1
      })
      setAlert(["Post uploaded Successfully!","true","success"])
      
      resetAlert()
      handleClose()

   }

   return (
      <span>
         <span onClick={handleOpen} style={{cursor:"pointer"}}>
         
         <img src={icon} alt="post" />
            {name}</span>
         
         {/* modal 1  */}
         <Modal
            open={opens}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
             
               <PostModelContainer>
                  <h4>Create Post</h4>
                  <Divider />
                  <input
                     className="post-caption-input"
                     placeholder={`What's on your mind, ${userD.username}?`}
                     value={captionData}
                     onChange={(e)=>setcaptionData(e.target.value)}
                  />
                  <div className="input-img-border">
                     
                     {/* form  */}
                     <form onSubmit={onPostClickHandler}>
                        <label htmlFor="input-img" className="input-img-label">
                           {postImg.userProfilePic.length === 0?
                           <>
                              <img src="img/network/add_files.svg" alt="" />
                              <div>Add Photos/Videos</div>
                           </>
                           :
                              <img src={postImg.userProfilePic} style={{width:"100%",borderRadius:"10px",margin:"0"}} alt="" />
                           }
                           
                           <input
                              id="input-img"
                              className="post-img-input"
                              type="file"
                              accept="image/*"
                              onChange={performImageChange}
                           />
                        </label>
                        <div className="div-button">
                           <Button variant="contained" type="submit" >
                              Post
                           </Button>
                        </div>
                     </form>
                  </div>
               </PostModelContainer>
            </Box>
         </Modal>


         {/* modal 2  for AvatarEditor */}
         <AvatarNetworkDiv>

         <div className="modal-demo" style={{ display: isOpen ? "block" : "none" }}>
            <div className="modal-demo-head">
               <i className="fa-sharp fa-solid fa-xmark" onClick={close}></i>
               My new Post
            </div>
            <hr />

            <div className="modal-demo-body">
               
                  <CropImageNetwork
                     imgSrc={postImg.selectedImage}
                     setEditorRef={setEditorRef}
                     scaleValue={postImg.scaleValue}
                     onScaleChange={onScaleChange}
                     />
             </div>

             <hr />

            <div className="modal-demo-foot">
               <Button block appearance="ghost" onClick={onCrop}>
                  Choose Image
               </Button>
            </div>
         </div>
         </AvatarNetworkDiv>

      </span>
   )
}
