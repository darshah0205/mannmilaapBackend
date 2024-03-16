const express = require("express");
const router = express.Router();

const {
  viewAllCustomer,
  addNewCustomer,
} = require("../controllers/customer.controller.js");

router.get("/", viewAllCustomer);

router.post("/", addNewCustomer);

module.exports = router;
