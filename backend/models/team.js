// import mongoose module
const mongoose = require("mongoose");

// create match schema
const teamSchema = mongoose.Schema({
  name: String,
  stadium: String,
  Owner: String,
});

// Affect model name to Schema
const team = mongoose.model("Team", teamSchema);
// export match
module.exports = team;
