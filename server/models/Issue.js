import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Road", "Garbage", "Water", "Electricity", "Other"],
      required: true
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending"
    },
    location: {
      lat: Number,
      lng: Number
    },
    image: {
      type: String
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);
export default Issue;
