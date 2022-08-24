import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
      return res.status(422).send("email and password are required");
    }

    try {
      await connectMongo();
      const user = new User({ name, email, password });
      console.log(user);
      await user.save();
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.send({ token });
    } catch (err) {
      return res.status(402).send(err.message);
    }
  }
}
