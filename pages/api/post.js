import connectMongo from "../../utils/connectMongo";
import Post from "../../models/post";

export default async function handler(req, res) {
  await connectMongo();
  if (req.method === "POST") {
    const { message, imageURL, userId } = req.body;

    const newPost = new Post({ message, imageURL, userId });
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      return res.status(409).json({ message: err.message });
    }
  }

  if (req.method === "GET") {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
