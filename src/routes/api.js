const express = require("express");
const Container = require("typedi");
const router = express.Router();

router.get("/test", async (req, res, next) => {
  try {
    const userDTO = req.body;

    // const userServiceInstance = Container.get(UserService) // Service locator

    // const user = userServiceInstance.getMyUser(userDTO);
    
const serviceInstance = Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();
    // return res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;