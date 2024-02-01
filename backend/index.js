const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./config/database");

app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
database.connect();

app.use("/user", u);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
