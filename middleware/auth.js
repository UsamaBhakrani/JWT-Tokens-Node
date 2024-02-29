const { AuthError } = require("../errors/index.js");
const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthError("Please Provide proper JWT Token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new AuthError("Please Provide proper JWT Token");
  }
};

module.exports = authMiddleWare;
