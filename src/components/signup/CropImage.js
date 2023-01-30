import React from 'react'
import AvatarEditor from 'react-avatar-editor';


const CropImage = ({imgSrc,setEditorRef,scaleValue,onScaleChange}) => {
  return (
    <>
        <AvatarEditor
        image={imgSrc}
        ref={setEditorRef}
        border={15}
        borderRadius={20}
        scale={scaleValue}
        className="rounded"

        />
        <div className='cropImage-comp'>
          <span>Zoom</span>
          <input type="range" class="form-range" id="customRange1" value={scaleValue} min="1" max="10"  onChange={onScaleChange}></input>
        </div>

    </>
  )
}

export default CropImage