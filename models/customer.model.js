const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email_id: {
      type: String,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    address_area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    father_full_name: {
      type: String,
      required: true,
    },
    mother_full_name: {
      type: String,
      required: true,
    },
    highest_education: {
      type: String,
      required: true,
    },
    group_membership_list: {
      type: [],
      required: true,
    },
    reference_name: {
      type: String,
      required: true,
    },
    reference_contact: {
      type: String, // Assuming reference contact could contain non-numeric characters
      required: true,
    },
    bio_data: {
      type: String,
      required: true,
    },
    adhaar_card: {
      type: String,
      required: true,
    },
    pan_card: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
