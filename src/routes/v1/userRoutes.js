const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middleware/jwtVerify");
const userController = require("../../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:userId", jwtAuth, userController.updateUserById);
router.delete("/:userId", jwtAuth, userController.deleteUserById);

module.exports = router;
