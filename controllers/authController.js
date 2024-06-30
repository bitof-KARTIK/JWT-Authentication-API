const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
module.exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).send("Your account already exists, please login")
        }

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        user = await userModel.create({
            email,
            password: hash,
            name,
        });
        let token = generateToken({ email });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).send("Email or Password not correct");
        }
        let result = await bcrypt.compare(password, user.password);
        if (result) {
            let token = generateToken({ email });
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            });
            res.status(201).send("logged in successfully");
        }
        else {
            return res.status(500).send("Email or Password not correct");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports.logoutUser = (req, res) => {

            res.cookie("token", "", {
                httpOnly: true,
                secure: true
            });
            res.status(201).send("logged out successfully");
}


module.exports.getUserProfile = (req, res) => {
    res.send("You're loggedIn");
};