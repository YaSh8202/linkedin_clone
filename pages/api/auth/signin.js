import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(422).send("email and password are required");
  }
  await connectMongo();
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
}
