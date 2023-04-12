const express = require("express");
const router = express.Router();

// Importar el archivo de enrutador
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const productsRoutes = require('./productRoutes');

router.get("/", (req, res) => {
    res.status(200)
    res.json({
        message: `Hello about ${req.baseUrl}`,
        date: new Date(),
        routes: {
            users: "/api/v1/users",
            products: "/api/v1/products"
        }
    })
})

// Agregar las rutas al enrutador principal
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productsRoutes);

module.exports = router;