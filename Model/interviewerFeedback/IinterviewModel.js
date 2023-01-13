import mongoose from "mongoose";

const { Schema } = mongoose;

const interviewerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  experience: {
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
});


export const Interview = mongoose.model('InterviewerModel', interviewerSchema);
