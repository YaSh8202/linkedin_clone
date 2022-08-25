import mongoose, { Schema, model, models } from "mongoose";

const postSchema = Schema(
  {
    message: String,
    imageURL: String,
    likes: {
      default: 0,
      type: Number,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    timestamp: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
