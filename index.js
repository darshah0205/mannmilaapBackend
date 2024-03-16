const express = require("express");
const mongoose = require("mongoose");
const customerRoute = require("./routes/customer.route.js");

const app = express();
app.use(express.json());

app.use("/customer", customerRoute);

mongoose
  .connect("url", (req, res) => {
    console.log("Connected to MongoDB");
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Could not connect to MongoDB");
  });
