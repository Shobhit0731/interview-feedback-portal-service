import mongoose from "mongoose";

const { Schema } = mongoose;

const userAuthSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


export const UserAuth = mongoose.model('UserAuthModel', userAuthSchema);
