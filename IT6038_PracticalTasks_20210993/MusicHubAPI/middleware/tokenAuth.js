const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) =>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log('Generated Token:', token);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, config.token_key);
        req.user = decoded;
        console.log('Decoded Token:', decoded);
    
    } catch (error) {
        return res.status(401).send("Invalid Token"); 
    }

    return next();
    
};

module.exports = verifyToken;