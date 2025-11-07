const { Router } = require("express");
const { AuthController } = require("./auth");

const router = Router();

router.post("/login", AuthController);

router.get("/test", (req, res) => {
  res.send("Auth is working!");
});

module.exports = {
  AuthRoutes: router,
};
