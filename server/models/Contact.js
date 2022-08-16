const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
});

const Contact = mongoose.model("Contact", contactFormSchema);

module.exports = Contact;
