// import mongoose module
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// create match schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  pwd: String,
  tel: Number,
  role: String,
  avatar: String,
});
userSchema.plugin(uniqueValidator);
// Affect model name to Schema
const user = mongoose.model("User", userSchema);
// export match
module.exports = user;
