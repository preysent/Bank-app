//Json Web Token
const jwt = require('jsonwebtoken');
const Jwt_Str = process.env.JWT_STRING

const getUserId = (req, res, next) => {

    const token = req.header('authToken')

    try {
        let decoded = jwt.verify(token, Jwt_Str);
        req.user = decoded.id;
        
        next();
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Invalid token" , login:false});
    }


}

module.exports = getUserId