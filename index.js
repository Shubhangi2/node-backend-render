const express = require("express");
const app = express();
require("dotenv").config();

const user = {
  name: "abc",
  age: "30",
  profession: "developer",
};

app.get("/", (req, res) => {
  res.send("hello shubhangi");
});

app.get("/user", (req, res) => {
  res.json(user);
});

app.listen(process.env.PORT, () => {
  console.log(`server listen on port : ${process.env.PORT}`);
});
