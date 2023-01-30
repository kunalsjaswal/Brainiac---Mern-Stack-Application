import userComments from '../model/comments.js'
import userLikes from '../model/likes.js'
import userNetwork from '../model/network.js'

export const getPosts = async (req, res) => {
   try {
      const postData = await userNetwork.find()
      res.status(200).json(postData)
   } catch (error) {
      res.status(404).json({ PostMessage: error.message })
   }
}
export const addPost = async (req, res) => {
   try {
      const newPost = await userNetwork.create({
         user: req.user.id,
         username: req.body.username,
         userProfile: req.body.userProfile,
         caption: req.body.caption,
         imgUrl: req.body.imgUrl,
      })
      res.status(201).json(newPost)
   } catch (error) {
      res.status(500).send(error.message)
   }
}
export const deletePost = async (req, res) => {
   try {
      let post = await userNetwork.findById(req.params.id)
      if (!post) {
         return res.status(404).send('Not found')
      }
      post = await userNetwork.findByIdAndDelete(req.params.id)
      res.json({ msg: 'task deleted' })
   } catch (error) {
      return res.status(500).send(error.message)
   }
}

export const likePost=async(req,res)=>{
   try{
      let addLike=await userNetwork.findById(req.params.id)
      let {likes}=addLike;
      if(!addLike){
         return res.status(404).send("Post Not found");
      }
      addLike=await userNetwork.findByIdAndUpdate(req.params.id,{likes:likes+1},{new:true})
      const newLike=await userLikes.create({
         user: req.user.id,
         post: req.params.id
      })

      res.status(201).json(newLike)
   }catch(error){
      return res.status(500).send(error.message)
   }
}


export const getLikes=async(req,res)=>{
   try {
      let data=await userLikes.find({user:req.user.id})
      return res.status(201).json(data)

   } catch (error) {
      return res.status(500).send(error.message)
   }
}

export const addComment=async(req,res)=>{


   try {
      const newComment=await userComments.create({
         user: req.user.id,
         post: req.params.id,
         comment: req.body.comment,
         username:req.body.username
      })

      res.status(201).json(newComment)

   } catch (error) {
      return res.status(500).send(error.message)
   }
}


export const getComments=async(req,res)=>{
   try {
      let data=await userComments.find({post:req.params.id})
      return res.status(201).json(data)

   } catch (error) {
      return res.status(500).send(error.message)
   }
}