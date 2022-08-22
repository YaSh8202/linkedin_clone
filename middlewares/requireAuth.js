require("../utils/connectMongo");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const requireAuth = (handler) => {
  return (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send("You must be logged in");
    }
    const token = authorization.replace("Bearer ", ""); // remove Bearer from the token
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) {
        return res.status(401).send({ error: "You must be logged in" });
      }
      const { userId } = payload;

      const user = await User.findById(userId);
      req.user = user;
      return handler(req, res);
    });
  };
};

export default requireAuth;
