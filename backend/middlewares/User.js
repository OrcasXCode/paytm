const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwttoken = words[1];
  try {
    const decodedValue = jwt.verify(jwttoken, process.env.JWT_SECRET);
    req.user = decodedValue;
    if (decodedValue) {
      next();
    } else {
      res.status(411).json({
        msg: "Unauthorized",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect password or username",
    });
  }
}

module.exports = {
  userMiddleware,
};
