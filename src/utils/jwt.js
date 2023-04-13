const jwt = require('jsonwebtoken')

const jwtVerify = (token,cb) => {
    jwt.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        cb(err,decoded)
    })
    
}

const jwtSign = ({id,name,roles}) => {
    const payload = {
       id,
       name,
       roles,
    }
    return jwt.sign(payload, process.env.SECRET_KEY)
}

module.exports = {
    jwtVerify,
    jwtSign
}