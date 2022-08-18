import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    try {
      await connectMongo();
      const user = new User({ name, email, password });
      console.log(user);
      await user.save();
      const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
      res.send({ token });
    } catch (err) {
      return res.status(402).send(err.message);
    }
  }
}
