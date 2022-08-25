import connectMongo from "../../utils/connectMongo";
import User from "../../models/user";

export default async function handler(req, res) {
  const { userId: id } = req.query;
  await connectMongo();
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).send({ name: user.name, email: user.email });
}
