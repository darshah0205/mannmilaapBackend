const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const customerRoute = require("./routes/customer.route.js");

const app = express();
app.use(express.json());

// Use the cors middleware
app.use(cors());

app.use("/customer", customerRoute);

mongoose
  .connect(
    "mongodb+srv://krishilsheth:JT98v8Vyxd4FBQHZ@mmbackend.no7pcgx.mongodb.net/mannmilaap?retryWrites=true&w=majority&appName=mmbackend"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3001, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Could not connect to MongoDB");
  });
