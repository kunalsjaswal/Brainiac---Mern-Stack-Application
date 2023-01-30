import mongoose from "mongoose";

const learningSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    // using foreign key concept 
  },
  htmlProgress:{
    type:Number,
    default:0
  },
  cssProgress:{
    type:Number,
    default:0
  } ,
  jsProgress:{
    type:Number,
    default:0
  } ,
  javaProgress:{
    type:Number,
    default:0
  } ,
  cppProgress:{
    type:Number,
    default:0
  }       
  
});

const userLearning= mongoose.model("userLearning", learningSchema);
export default userLearning;
