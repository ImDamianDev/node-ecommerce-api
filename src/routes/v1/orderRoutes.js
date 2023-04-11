const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post("/", userController.createUser);
router.patch("/:userId", userController.updateUserById);
router.delete("/:userId", userController.deleteUserById);

module.exports = router;
