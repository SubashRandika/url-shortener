const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

//connecting to database
connectDB();

app.use(express.json({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
