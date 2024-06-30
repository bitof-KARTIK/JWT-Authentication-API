const express = require('express');
const app = express();
require('dotenv').config();
const connectToDB=require('./config/mongoose-connection');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectToDB(); //connecting to db

app.use("/api/auth",authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});