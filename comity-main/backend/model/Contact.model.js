import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
      type: {
          type: String,
          required:true,
        },
        content: {
          type: String,
          required: true,
        },
  },
);

export const Contact = mongoose.model("Contact", contactSchema);
