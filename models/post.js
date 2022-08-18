import { Schema, model, models } from "mongoose";

const postSchema = Schema({
  name: String,
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
});

const Post = models.Post || model("User", postSchema);

export default Post;
