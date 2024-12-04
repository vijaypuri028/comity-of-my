// models/Industries.js
import mongoose from "mongoose";

const industrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  scheme: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
  },
  color: {
    type: String,
    default: "#fff",
  },
  link: {
    type: String,
  },
  label: {
    type: String,
  },
  value: {
    type: Number,
    default: 20,
  },
  showThis: {
    type: Boolean,
    default: true,
  },
});

export const Industry = mongoose.model("Industry", industrySchema);
