import mongoose from "mongoose";

userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('user', userSchema)