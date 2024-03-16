const Customer = require("../models/customer.model.js");

const viewAllCustomer = async (req, res) => {
  try {
    const customer = await Customer.find({});
    res.status(200).json({ data: customer });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({ data: customer });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { viewAllCustomer, addNewCustomer };
