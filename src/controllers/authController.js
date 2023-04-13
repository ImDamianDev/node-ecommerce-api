const { jwtSign } = require("./../utils/jwt");
const userService = require("../services/userService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica que el usuario existe y las contraseñas coinciden
    const user = await userService.verifyUser(email, password);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    // Genera un token JWT y lo envía en la respuesta
    const token = jwtSign(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  login,
};
