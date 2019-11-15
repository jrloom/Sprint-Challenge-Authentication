const jwt = require("jsonwebtoken");

function getToken(username) {
  const secret = process.env.JWT_SECRET || "bestkeptsecret";
  const payload = { username };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;
