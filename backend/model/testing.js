import mongoose from "mongoose";

const testingSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
        // using foreign key concept 
    },
    task: String,
    date: {
      type: Date,
      default: Date.now,
    },
    weekDay: String,
    status: {
      type: Boolean,
      default: false,
    },
    iconIndex: {
      type: Number,
      default: 7,
    },
})

const testUser=mongoose.model("testUser",testingSchema);
export default testUser;