const express = require("express");
const Container = require("typedi");
const router = express.Router();

router.get("/test", async (req, res, next) => {
  try {
    const userDTO = req.body;

    const userServiceInstance = Container.get(UserService) // Service locator

    const { user, company } = userServiceInstance.Signup(userDTO);
    return res.json({ user, company });
  } catch (error) {
    next(error);
  }
});

module.exports = router;