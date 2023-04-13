const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middleware/jwtVerify");
const { roleAuthorization } = require('../../middleware/roleAuthorization')
const productController = require("../../controllers/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", jwtAuth, roleAuthorization(['admin']), productController.createProduct);
router.put("/:id", jwtAuth, productController.updateProduct);
router.delete("/:id", jwtAuth, productController.deleteProduct);

module.exports = router;
