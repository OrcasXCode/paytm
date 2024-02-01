const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./config/database");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
database.connect();

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
