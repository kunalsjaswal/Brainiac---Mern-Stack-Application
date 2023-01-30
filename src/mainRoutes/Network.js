import React, { memo, useContext, useEffect } from 'react'
import NetworkNavbar from '../components/Network/NetworkNavbar'
import {
   NetworkNavbarContainer,
   NetworkMainDivContainer,
   NetworkPostCardContainer,
   NetworkBody,
   ProfileContainer,
} from '../styledComponents/Network/NetworkStyle'

import NetworkPostCard from '../components/Network/NetworkPostCard'
import AddPost from '../components/Network/AddPost'
import { Divider } from '@mui/material'
import taskContext from '../context/taskContext'

const Network = () => {
   const { networkPosts, getNetworkPosts, getUserData, userD } =useContext(taskContext)
   let totalPosted=0;
   let totalLikes=0;

   useEffect(() => {
      getNetworkPosts()
      getUserData()
   },[networkPosts.length])


   // calculate totalPosts posted by user 
   networkPosts.map((val)=> {
      if(val.user === userD._id){
         totalPosted++
         totalLikes+=val.likes
      }  
   })

   

   return (
      // main div
      <NetworkMainDivContainer>

         {/* navbar container */}
         <NetworkNavbarContainer>

            <NetworkNavbar />
         </NetworkNavbarContainer>
         {/* closed navbar container */}
         <NetworkBody>

            <div>
               {/* Add post */}
               <AddPost />
               <NetworkPostCardContainer>
                  {/* mapping to get posts  */}

                
                  {networkPosts.length > 0 &&
                     networkPosts.map((val, ind) => (
                        <div key={ind} className="post-card-container">
                           <div className="network-post-card">
                              <NetworkPostCard
                                 key={ind}
                                 postid={val._id}
                                 currentUser={userD.username}
                                 username={val.username}
                                 userProfile={val.userProfile}
                                 imgUrl={val.imgUrl}
                                 caption={val.caption}
                                 date={val.date}
                                 likes={val.likes}
                              />
                           </div>
                        </div>
                     ))}
               </NetworkPostCardContainer>
            </div>
            <div>
               <div className="profilecontainer">
                  <div className="img-container">
                     <img
                        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                        alt="background"
                     />
                     <img
                        id="profile-img"
                        src={userD.imgUrl}
                        alt="profile"
                        style={{ border: '6px solid white' }}
                     />
                  </div>
                  <div className="profile-name">
                     <h3>{userD.username}</h3>
                     <p>{userD.email}</p>
                  </div>
                  <Divider />
                  <div className="profile-details">
                     <div className="align-profile-details">
                        <span>Total Post By {userD.username}</span>{' '}
                        <span className="counting">{totalPosted}</span>
                     </div>

                     <div className="align-profile-details">
                        <span>Likes on your Post</span>{' '}
                        <span className="counting">{totalLikes}</span>
                     </div>
                  </div>
               </div>
               <div className="profile-bottom-part">
                  <h4>Bio</h4>
                  <Divider />
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy
                  </p>
               </div>
            </div>
         </NetworkBody>
      </NetworkMainDivContainer>
   )
}

export default memo(Network)
