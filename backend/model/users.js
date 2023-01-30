import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imgUrl:{
    type:String
  }
});

const userData = mongoose.model("userData", userSchema);
export default userData;
