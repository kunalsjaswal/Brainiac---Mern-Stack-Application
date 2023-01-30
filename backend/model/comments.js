import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    // id of user who commented on post
  },
  username:String,
  post:{
    type:mongoose.Schema.Types.ObjectId,
    // id of post/ image 
  },
  comment:String,
  date:{
    type:Date,
    default:Date.now()
  }
  
});

const userComments = mongoose.model("userComments", commentSchema);
export default userComments;
