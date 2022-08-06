const mongoose = require("mongoose");

const legislatorSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  officeName: {
    type: String
  },
  electionOffice: {
    type: String
  },
  electionStatus: {
    type: String
  }
});

const Legislator = mongoose.model("Legislator", legislatorSchema);

module.exports = Legislator;
