import connectMongo from "../../utils/connectMongo";
import Post from "../../models/post";

export default async function handler(req, res) {
  await connectMongo();
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
