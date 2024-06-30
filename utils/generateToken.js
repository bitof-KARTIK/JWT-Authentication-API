const jwt = require('jsonwebtoken');
const generateToken=(data)=>{
    return jwt.sign(data,process.env.JWT_SECRET);
}
module.exports=generateToken;