import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    // id of user who liked on post
  },
  post:String,

  
});

const userLikes = mongoose.model("userLikes", likesSchema);
export default userLikes;
