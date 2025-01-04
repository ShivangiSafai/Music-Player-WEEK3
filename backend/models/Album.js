import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      id: String, 
      url: String,
    }, 
    
  },
  { 
    timestamps: true, 
  }
);

// Correctly register the model
export const Album = mongoose.model("Album", schema);
