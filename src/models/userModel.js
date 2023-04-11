const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definir el schema de usuario
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

// Crear el modelo de usuario a partir del schema
const User = mongoose.model('User', userSchema);

module.exports = User;
