const productService = require('../services/productService');

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    console.log(newProduct)
    const product = await productService.createProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    const product = await productService.updateProductById(id, updatedProduct);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.deleteProductById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
