// // import mongoose module
// const mongoose = require("mongoose");

// // create match schema
// const playerSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   position: String,
// });

// // Affect model name to Schema
// const player = mongoose.model("Player", playerSchema);
// // export match
// module.exports = player;
// import mongoose module
const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  age: Number,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});
// create Model Name "Player"
const player = mongoose.model("Player", playerSchema);
// make player exportable
module.exports = player;
