import React from 'react'
import AvatarEditor from 'react-avatar-editor'

const CropImageNetwork = ({imgSrc,setEditorRef}) => {
  return (
    <>
        <AvatarEditor
        image={imgSrc}
        ref={setEditorRef}
        border={25}
        borderRadius={0}
        scale={1.2}
        className="rounded"
        width={550}
        height={328}
        />
        {/* // define width and height as same ratio as post  */}
    </>
  )
}

export default CropImageNetwork