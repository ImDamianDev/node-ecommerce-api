const mongoose = require("mongoose")

// Definir el schema de producto
const ProductSchema = new mongoose.Schema(
    {
        title : { type: String, required: true, unique: true },
        desc : { type: String, required: true },
        img : { type: String, required: true },
        categories : { type: Array },
        size : { type: String },
        color : { type: String },
        price : { type: String, required: true },
    },
    { timestamps: true }
);

// Crear el modelo de producto usuario a partir del schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
