// import mongoose module
const mongoose = require("mongoose");

// create match schema
const imcSchema = mongoose.Schema({
  name: String,
  taille: Number,
  poids: Number,
  IMC: Number,
});

// Affect model name to Schema
const imc = mongoose.model("Imc", imcSchema);
// export match
module.exports = imc;
