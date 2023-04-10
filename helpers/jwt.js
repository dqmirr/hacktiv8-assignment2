const jwt = require("jsonwebtoken");
const secretKey = "rahasia";

const generateToken = (payload) =>{
return jwt.sign(payload, secretKey)
}

const verifyToken = (token) =>{
return jwt.verify(token, secretKey)
}

module.exports = {
    generateToken,
    verifyToken
}