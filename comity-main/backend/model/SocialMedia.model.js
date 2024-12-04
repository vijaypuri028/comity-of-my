import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

export const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);
