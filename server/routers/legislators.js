const { Router } = require("express");
const Legislator = require("../models/Legislator");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newLegislator = new Legislator(request.body);
  newLegislator.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
