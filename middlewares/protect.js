const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');
module.exports.protect=async (req,res,next)=>{
    if(req.cookies.token){
        try{
            const data=jwt.verify(req.cookies.token,process.env.JWT_SECRET);
            let user= await userModel.findOne({email:data.email}).select("-password");
            req.user=user;
            next();
        }catch(err){
            res.status(401).send("Not authorized");
        }
    }
    if(!req.cookies.token){
        res.status(401).send("Not authorized, You dont have permission to access");
    }
}