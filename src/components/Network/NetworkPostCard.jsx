/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardOverflow from '@mui/joy/CardOverflow'
import Link from '@mui/joy/Link'
import IconButton from '@mui/joy/IconButton'
import Input from '@mui/joy/Input'
import Typography from '@mui/joy/Typography'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined'
// import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from '@mui/icons-material/Face'
import { Button } from '@mui/material'
// import demo from "../../images/slides/test1.jpg";
// import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useContext } from 'react'
import taskContext from '../../context/taskContext'
import { useEffect } from 'react'
import { memo } from 'react'
import { useState } from 'react'

function NetworkPostCard({
   currentUser,
   username,
   userProfile,
   imgUrl,
   caption,
   postid,
   date,
   likes
}) {


  const {getLikes,likesData,setlikesData,getNetworkPosts,addComment,getComments,comments,userD}= useContext(taskContext);
  
  
  useEffect(()=>{
     getLikes(postid)
     getComments(postid)
   },[])
   
   const cond=likesData.find((val)=>{return val.post===postid})

   const postLike=async()=>{
      const response = await fetch(`http://localhost:5000/brainiac/postLiked/${postid}`,
      {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               auth_token: localStorage.getItem('token'),
            },
      })

      const data=await response.json()
      setlikesData(likesData.concat(data))
      getNetworkPosts()

   }
   const handleDeletePost = async () => {
      if(window.confirm("Want to Delete your post?")){
         const response = await fetch(
            `http://localhost:5000/brainiac/deletepost/${postid}`,
            {
               method: 'DELETE',
               headers: {
                  'Content-Type': 'application/json',
                   auth_token: localStorage.getItem('token'),
               },
            }
         )
         getNetworkPosts()
         window.alert("Post deleted succesfully");
      }
   }

   
   const [singleComment, setSingleComment] = useState("")
   const onClickHandler=(e)=>{
      e.preventDefault()
      addComment(userD._id, singleComment,userD.username)
      setSingleComment("")
   }

   return (
      <Card
         // variant="outlined"
         sx={{
            minWidth: 600,
            '--Card-radius': (theme) => theme.vars.radius.xs,
         }}
      >
         <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
            <Box
               sx={{
                  position: 'relative',
                  '&:before': {
                     content: '""',
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     bottom: 0,
                     right: 0,
                     m: '-2px',
                     borderRadius: '50%',
                     background:
                        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  },
               }}
            >
               <Avatar
                  size="md"
                  src={userProfile}
                  sx={{
                     p: 0,
                    
                  }}
               />
            </Box>
            <Typography fontWeight="lg">{username}</Typography>
       
            {currentUser === username && (
               <div style={{ marginLeft: 'auto' }}>
                  <IconButton aria-label="delete" onClick={handleDeletePost}>
                     <DeleteOutlineIcon />
                  </IconButton>
               </div>
            )}
         </Box>
         <CardOverflow>
            <AspectRatio>
               <img
                  src={imgUrl}
                  alt="img"
                  loading="lazy"
               />
            </AspectRatio>
         </CardOverflow>
         <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
            <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
               <IconButton variant="plain" color="neutral" size="sm">
                  {cond ? <FavoriteIcon style={{color:"red"}}/>:<FavoriteBorder onClick={postLike}/>}
                  
                  
               </IconButton>
               <IconButton variant="plain" color="neutral" size="sm">
                  <ModeCommentOutlined />
               </IconButton>
               {/* <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton> */}
            </Box>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  mx: 'auto',
               }}
            >
               {[...Array(5)].map((_, index) => (
                  <Box
                     key={index}
                     sx={{
                        borderRadius: '50%',
                        width: `max(${6 - index}px, 3px)`,
                        height: `max(${6 - index}px, 3px)`,
                        bgcolor:
                           index === 0
                              ? 'primary.solidBg'
                              : 'background.level3',
                     }}
                  />
               ))}
            </Box>
            {/* <Box sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box> */}
         </Box>
         <Link
            component="button"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
            textColor="text.primary"
         >
            {likes} Likes
         </Link>
         <Typography fontSize="sm">
            <Link
               component="button"
               color="neutral"
               fontWeight="lg"
               textColor="text.primary"
            >
               caption:
            </Link>{' '}
            {caption}
         </Typography>
         <Link
            component="button"
            underline="none"
            fontSize="sm"
            startDecorator="…"
            sx={{ color: 'text.tertiary' }}
         >
            more
         </Link>
         <Link
            component="button"
            underline="none"
            fontSize="10px"
            sx={{ color: 'text.tertiary', my: 0.5 }}
         >
            posted on  <b className='mx-1'> {date.substring(0,10)}</b>
         </Link>
         <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
            <IconButton
               size="sm"
               variant="plain"
               color="neutral"
               sx={{ ml: -1 }}
            >
               <Face />
            </IconButton>
               <Input
                  variant="plain"
                  size="sm"
                  placeholder="Add a comment…"
                  value={singleComment}
                  onChange={(e)=>setSingleComment(e.target.value)}
                  sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
               />
               <Link  underline="none" role="button"  onClick={onClickHandler}>
                  Post
               </Link>
         </CardOverflow>
      </Card>
   )
}


export default memo(NetworkPostCard)