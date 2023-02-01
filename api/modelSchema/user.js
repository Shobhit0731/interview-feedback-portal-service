import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,});

export const UserModel = mongoose.model('users', userSchema)



const interviewerSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  experienceInYears: {
    type: Number,
    required: true,
  },
  alignedBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  interviewDate: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});


export const Interview = mongoose.model('InterviewerModel', interviewerSchema);