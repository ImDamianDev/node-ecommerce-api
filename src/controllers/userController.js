const userService = require('../services/userService');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        const sanitizedUsers = users.map((user) => ({
            name: user.name,
            email: user.email,
        }));
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un usuario por su id
const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear un nuevo usuario
const createUser = async (req, res) => {
    console.log("post")
    try {
        // Comprobamos que se envió el body con la información necesaria
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res
                .status(400)
                .json({ message: "Name, email and password are required" });
        }

        // Comprobamos si ya existe un usuario con ese correo electrónico
        const existingUser = await userService.findUserByEmail(req.body.email);
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "An account with this email already exists" });
        }

        // Creamos el nuevo usuario
        console.log(req.body)
        const user = await userService.createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Actualizar un usuario existente
const updateUserById = async (req, res) => {
    console.log(req.params.userId)
    try {
        const user = await userService.updateUserById(req.params.userId, req.body);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await userService.deleteUserById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
};
