const jwt = require('jsonwebtoken');

function signToken(payload) {
    const token = jwt.sign(payload, "10")
    return token
}

function verifyToken(token) {
    const decoded = jwt.verify(token, "10") 
    return decoded
}

module.exports = {
    signToken, 
    verifyToken
}