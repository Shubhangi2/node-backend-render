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
  console.log("response for user");
  res.json(user);
});
app.get("/youtube", (req, res) => {
  res.send("Welcom back to my youtube channel");
});

app.listen(process.env.PORT, () => {
  console.log(`server listen on port : ${process.env.PORT}`);
});
