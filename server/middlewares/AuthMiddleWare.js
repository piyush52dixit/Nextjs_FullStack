const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  console.log("🚀 ~ validateToken ~ accessToken:", accessToken);

  if (!accessToken) {
    return res.json({ error: "User Not logged in" });
  } else {
    try {
      const validToken = verify(accessToken, "impkey");
      console.log("🚀 ~ validateToken ~ validToken:", validToken);

      if (validToken) {
        return next();
      }
    } catch (err) {
      return res.json({ "error is found in validToken": err });
    }
  }
};

module.exports = { validateToken };
