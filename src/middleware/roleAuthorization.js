const roleAuthorization = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.jwtUser.roles;
    //console.log("user role")
    //console.log(userRole)
    //console.log("allowed role")
    //console.log(allowedRoles)

    const matchingRoles = userRole.filter(role => allowedRoles.includes(role));

    if (matchingRoles.length > 0) {
      next();
    } else {
      res.status(403).json({ message: "Usuario no autorizado" });
    }
  };
};

module.exports = { roleAuthorization };
