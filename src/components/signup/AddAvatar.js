import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'rsuite';
import ReactAvatarEditor from 'react-avatar-editor';
import AvatarEditor from 'react-avatar-editor';
import { useCallback } from 'react';
import { AvatarDiv } from '../../styledComponents/Signup/AvatarStyle';
import CropImage from './CropImage';

const fileInputTypes = '.png, .jpeg, .jpg';

const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
const isValidFile = (file) => acceptedFileTypes.includes(file.type);





const AddAvatar = ({setAvatarIcon,setsignupdata,signupData}) => {
  const setEditorRef=useRef(null);

  const [state,setState]=useState({
    userProfilePic:'',
    scaleValue:1
  });

  const [isOpen,setIsOpen]=useState(false);
  const open=useCallback(()=>setIsOpen(true))
  const close=useCallback(()=>setIsOpen(false))


  const onCrop=(e)=>{
    e.preventDefault()
    if(setEditorRef!=null){

      const url = setEditorRef.current.getImageScaledToCanvas().toDataURL();
      setState((prev)=>({...prev,userProfilePic:url}))
      setAvatarIcon((prev)=>({status:true,icon:url}))
      setsignupdata({...signupData,imgUrl:url})
      close();

    }
  }

  const onScaleChange=(scaleChangeEvent)=>{
    const scaleValue=parseFloat(scaleChangeEvent.target.value);
    setState((prev)=>({...prev,scaleValue:scaleValue}))

  }


   //  on change event on input file 
  const performImageChange=(fileChangeEvent)=>{
    const file=fileChangeEvent.target.files[0];
    setState((prev)=>({...prev,selectedImage:file}))
    open()

  }
 
  

  return(
    <AvatarDiv>
      <label htmlFor="avatar-upload" className="d-block cursor-pointer padded">
           <input  name="imgUrl" type="file" className="input-img fs-6" accept="image/*"  onChange={performImageChange}/>
      </label> 
      
      
      <br />

      <div
        className="modal-demo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-demo-head">
          <i className="fa-sharp fa-solid fa-xmark" onClick={close}></i>
          Adjust and Upload new Avatar
        </div>
        <hr />

        <div className="modal-demo-body">
         
            <CropImage
              imgSrc={state.selectedImage}
              setEditorRef={setEditorRef}
              scaleValue={state.scaleValue}
              onScaleChange={onScaleChange}
            />
        </div>
        <hr />

        <div className="modal-demo-foot">
          <Button block appearance="ghost" onClick={onCrop}>
            Upload new Avatar
          </Button>
        </div>
      </div>
    </AvatarDiv>

    
  )

}

export default AddAvatar