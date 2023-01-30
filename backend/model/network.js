import mongoose from 'mongoose'

const networkSchema = mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      // using foreign key concept
   },
   username:String,
   userProfile: String,
   imgUrl: String,
   caption: String,
   date: {
      type: Date,
      default: Date.now(),
   },
   likes: {
      type: Number,
      default: 0,
   },
})

const userNetwork = mongoose.model('networkPhotos', networkSchema)
export default userNetwork
