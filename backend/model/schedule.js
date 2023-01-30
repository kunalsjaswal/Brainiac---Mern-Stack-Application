import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
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
});

const userSchedule = mongoose.model("userSchedule", scheduleSchema);
export default userSchedule;
