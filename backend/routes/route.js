import express from 'express'
import { addPost, getPosts,deletePost, likePost, getLikes,addComment, getComments } from '../controller/posts.js'

import {
   getTasks,
   addTasks,
   deleteTasks,
   updateTaskStatus,
} from '../controller/tasks.js'
import { newUserfnx, userLogin, getUserData } from '../controller/users.js'
import { fetchuser } from '../middleware/fetchuser.js'

const router = express.Router()


//schedule tasks
router.get('/fetchTasks', fetchuser, getTasks)
router.post('/addTask', fetchuser, addTasks)
router.delete('/deleteTask/:id', fetchuser, deleteTasks)
router.put('/updateTaskStatus/:id', fetchuser, updateTaskStatus)


// user auth
router.post('/newUser', newUserfnx)
router.post('/userLogin', userLogin)
router.post('/getUserData', fetchuser, getUserData)

// network
router.post('/addPost', fetchuser, addPost)
router.get('/getPosts', getPosts)
router.delete('/deletepost/:id', fetchuser, deletePost)
router.get('/getLikes',fetchuser,getLikes)
router.put('/postLiked/:id',fetchuser,likePost)

router.post('/addComment/:id',fetchuser,addComment)
router.get('/allComments/:id',fetchuser,getComments)

export default router
