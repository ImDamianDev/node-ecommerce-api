const User = require("../models/userModel");
const bcrypt = require('bcrypt');

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const verifyUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid user");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }

  return user;
};

const createUser = async (user) => {
  const { name, email, password } = user;

  // Generar salt para encriptar la contraseña
  const salt = await bcrypt.genSalt(10);

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, salt);

  // Crear un nuevo objeto usuario con la contraseña encriptada
  const newUser = new User({
    name,
    email,
    password: hashedPassword, // Guardar la contraseña encriptada en la base de datos
  });

  await newUser.save();
  return newUser;
};

const updateUserById = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, { new: true });
  return user;
};

const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  findUserByEmail,
  verifyUser,
};
